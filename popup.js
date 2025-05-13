document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const sepiaSlider = document.getElementById('sepiaSlider');
  const sepiaValue = document.querySelector('.sepia-value');
  const themeRadios = document.querySelectorAll('.theme-radio');
  const versionText = document.querySelector('.version-text');

  // Display version number from manifest
  const manifestData = chrome.runtime.getManifest();
  if (versionText && manifestData.version) {
    versionText.textContent = `v${manifestData.version}`;
  }

  function getCurrentTheme() {
    const selectedRadio = document.querySelector('.theme-radio:checked');
    return selectedRadio ? selectedRadio.value : 'light';
  }

  // Get the current theme mode and sepia value from storage
  chrome.storage.local.get(['themeMode', 'sepiaIntensity'], function (result) {
    const mode = result.themeMode || 'light-new'; // Default to light-new if nothing stored
    const sepiaIntensity = result.sepiaIntensity || 0;
    
    // Set the toggle state based on the stored theme mode
    toggle.checked = (mode === 'dark' || mode === 'light-new' || mode === 'light-dark' || mode === 'light-purple');
    
    // Set the selected theme radio button
    const themeRadio = document.querySelector(`.theme-radio[value="${mode}"]`);
    if (themeRadio) {
      themeRadio.checked = true;
    }
    
    // Set the sepia slider value
    sepiaSlider.value = sepiaIntensity;
    sepiaValue.textContent = `${sepiaIntensity}%`;
    
    // Update the dark-mode class for both dark and light-dark themes
    document.body.classList.toggle('dark-mode', mode === 'dark' || mode === 'light-dark');
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
      updateManagedTabs(getCurrentTheme(), intensity);
    });
  });

  // Handle toggle changes: check the toggle state to decide the mode.
  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      // When enabling, default to light-new (Material Light) theme
      const lightNewRadio = document.querySelector('.theme-radio[value="light-new"]');
      if (lightNewRadio) {
        lightNewRadio.checked = true;
      }
      const selectedMode = 'light-new';
      document.body.classList.toggle('dark-mode', selectedMode === 'dark' || selectedMode === 'light-dark');
      
      chrome.storage.local.get(['sepiaIntensity'], function(result) {
        const intensity = result.sepiaIntensity || 0;
        chrome.storage.local.set({ themeMode: selectedMode }, function () {
          updateManagedTabs(selectedMode, intensity);
        });
      });
    } else {
      // When disabling, revert to light theme (original theme)
      document.body.classList.remove('dark-mode');
      
      chrome.storage.local.get(['sepiaIntensity'], function(result) {
        const intensity = result.sepiaIntensity || 0;
        chrome.storage.local.set({ themeMode: 'light' }, function () {
          updateManagedTabs('light', intensity);
        });
      });
    }
  });

  // Handle theme selection from radio buttons
  themeRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (toggle.checked) {
        const selectedMode = this.value;
        // Only apply theme if toggle is enabled
        document.body.classList.toggle('dark-mode', selectedMode === 'dark' || selectedMode === 'light-dark');
        
        // Get current sepia value before updating
        chrome.storage.local.get(['sepiaIntensity'], function(result) {
          const intensity = result.sepiaIntensity || 0;
          chrome.storage.local.set({ themeMode: selectedMode }, function () {
            updateManagedTabs(selectedMode, intensity);
          });
        });
      }
    });
  });

  // Add reset button functionality
  const resetButton = document.querySelector('.sepia-reset');
  resetButton.addEventListener('click', function() {
    sepiaSlider.value = 0;
    sepiaValue.textContent = '0%';
    
    // Store the reset sepia intensity and update tabs
    chrome.storage.local.set({ sepiaIntensity: 0 }, function() {
      updateManagedTabs(getCurrentTheme(), 0);
    });
  });

  // Set up extension settings link
  const extensionSettingsLink = document.getElementById('extensionSettingsLink');
  if (extensionSettingsLink) {
    extensionSettingsLink.addEventListener('click', async (e) => {
      e.preventDefault();
      
      // Detect browser and get appropriate URL
      const userAgent = navigator.userAgent.toLowerCase();
      let extensionsUrl = 'chrome://extensions';
      
      if (userAgent.includes('edg/')) {
        extensionsUrl = 'edge://extensions';
      } else if (userAgent.includes('brave')) {
        extensionsUrl = 'brave://extensions';
      } else if (userAgent.includes('arc')) {
        extensionsUrl = 'arc://extensions';
      } else if (userAgent.includes('firefox')) {
        extensionsUrl = 'about:addons';
      }

      // Create new tab with extensions page
      await chrome.tabs.create({ url: extensionsUrl });
      window.close(); // Close the popup after opening new tab
    });
  }
});

// Function to open the releases page
function checkForUpdates() {
  const releasesUrl = 'https://github.com/karthik558/GPM-DarkMode/releases/';
    try {
        chrome.tabs.create({ url: releasesUrl }, (tab) => {
            if (chrome.runtime.lastError) {
                console.error('Error opening releases page:', chrome.runtime.lastError);
                return;
            }
            window.close(); // Close the popup after successfully opening the releases page
        });
    } catch (error) {
        console.error('Error checking for updates:', error);
    }
}

// Add event listener for update button
document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('updateButton');
    if (updateButton) {
        updateButton.addEventListener('click', checkForUpdates);
    }
    
    // Add event listener for author card
    const authorCard = document.getElementById('authorCard');
    if (authorCard) {
        authorCard.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://karthiklal.in' });
        });
    }
});