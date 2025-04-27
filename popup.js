document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const themeSelect = document.getElementById('themeSelect');
  const sepiaSlider = document.getElementById('sepiaSlider');
  const sepiaValue = document.querySelector('.sepia-value');

  // Get the current theme mode and sepia value from storage
  chrome.storage.local.get(['themeMode', 'sepiaIntensity'], function (result) {
    const mode = result.themeMode || 'light';
    const sepiaIntensity = result.sepiaIntensity || 0;
    
    // Set the toggle state based on the stored theme mode
    toggle.checked = (mode === 'dark' || mode === 'light-new');
    if (themeSelect) {
      themeSelect.value = mode;
    }
    
    // Set the sepia slider value
    sepiaSlider.value = sepiaIntensity;
    sepiaValue.textContent = `${sepiaIntensity}%`;
    
    document.body.classList.toggle('dark-mode', mode === 'dark');
  });

  // Function to send theme mode update to managed tabs
  function updateManagedTabs(newMode, sepiaIntensity) {
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(tab => {
        if (tab.url.includes('mgntproject.com') || tab.url.includes('iimwin.com')) {
          chrome.tabs.sendMessage(tab.id, {
            action: 'setTheme',
            mode: newMode,
            sepiaIntensity: sepiaIntensity
          });
        }
      });
    });
  }

  // Handle sepia slider changes
  sepiaSlider.addEventListener('input', function() {
    const intensity = this.value;
    sepiaValue.textContent = `${intensity}%`;
    
    // Store the sepia intensity
    chrome.storage.local.set({ sepiaIntensity: intensity }, function() {
      updateManagedTabs(themeSelect.value, intensity);
    });
  });

  // Handle toggle changes: check the toggle state to decide the mode.
  toggle.addEventListener('change', function () {
    const currentTheme = themeSelect.value;
    const newMode = toggle.checked ? 
      (currentTheme === 'dark' ? 'dark' : 'light-new') : 'light';
    
    // Update the theme select to match the toggle state
    if (themeSelect) {
      themeSelect.value = newMode;
    }
    document.body.classList.toggle('dark-mode', newMode === 'dark');
    
    // Get current sepia value before updating
    chrome.storage.local.get(['sepiaIntensity'], function(result) {
      const intensity = result.sepiaIntensity || 0;
      chrome.storage.local.set({ themeMode: newMode }, function () {
        updateManagedTabs(newMode, intensity);
      });
    });
  });

  // Handle theme selection from dropdown.
  // When the user explicitly selects a theme, update the toggle to reflect material themed modes.
  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      const selectedMode = themeSelect.value;
      // Update toggle checked state if "dark" or "light-new" is selected.
      toggle.checked = (selectedMode === 'dark' || selectedMode === 'light-new');
      // Apply the selected theme immediately
      document.body.classList.toggle('dark-mode', selectedMode === 'dark');
      
      // Get current sepia value before updating
      chrome.storage.local.get(['sepiaIntensity'], function(result) {
        const intensity = result.sepiaIntensity || 0;
        chrome.storage.local.set({ themeMode: selectedMode }, function () {
          updateManagedTabs(selectedMode, intensity);
        });
      });
    });
  }

  // Add reset button functionality
  const resetButton = document.querySelector('.sepia-reset');
  resetButton.addEventListener('click', function() {
    sepiaSlider.value = 0;
    sepiaValue.textContent = '0%';
    
    // Store the reset sepia intensity and update tabs
    chrome.storage.local.set({ sepiaIntensity: 0 }, function() {
      updateManagedTabs(themeSelect.value, 0);
    });
  });
});

async function checkForUpdates() {
    const updateButton = document.getElementById('updateButton');
    updateButton.classList.add('checking');
    updateButton.disabled = true;

    try {
        // Get current version from manifest
        const manifest = chrome.runtime.getManifest();
        const currentVersion = manifest.version;

        // Fetch latest release from GitHub
        const response = await fetch('https://api.github.com/repos/karthik558/GPM-DarkMode/releases/latest');
        const data = await response.json();
        const latestVersion = data.tag_name.replace('v', '');

        if (compareVersions(latestVersion, currentVersion) > 0) {
            // New version available
            const confirmUpdate = confirm(`New version ${latestVersion} is available! Current version: ${currentVersion}\nWould you like to download the update?`);
            
            if (confirmUpdate) {
                // Get the zip download URL
                const zipUrl = data.assets.find(asset => asset.name.endsWith('.zip')).browser_download_url;
                
                // Open the download URL in a new tab
                chrome.tabs.create({ url: zipUrl });
                
                // Show instructions
                alert('After downloading:\n1. Extract the zip file\n2. Go to chrome://extensions/\n3. Enable Developer Mode\n4. Click "Load unpacked"\n5. Select the extracted folder');
            }
        } else {
            alert('You have the latest version installed!');
        }
    } catch (error) {
        console.error('Error checking for updates:', error);
        alert('Error checking for updates. Please try again later.');
    } finally {
        updateButton.classList.remove('checking');
        updateButton.disabled = false;
    }
}

function compareVersions(v1, v2) {
    const v1parts = v1.split('.').map(Number);
    const v2parts = v2.split('.').map(Number);
    
    for (let i = 0; i < v1parts.length; ++i) {
        if (v2parts.length === i) {
            return 1;
        }
        if (v1parts[i] === v2parts[i]) {
            continue;
        }
        if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        return -1;
    }
    
    if (v1parts.length !== v2parts.length) {
        return -1;
    }
    
    return 0;
}

// Add event listener for update button
document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('click', checkForUpdates);
});