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
});