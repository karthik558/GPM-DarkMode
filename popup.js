document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const themeSelect = document.getElementById('themeSelect');

  // Get the current theme mode from storage
  chrome.storage.local.get(['themeMode'], function (result) {
    const mode = result.themeMode || 'light';
    // Update toggle state for both material modes
    toggle.checked = (mode === 'dark' || mode === 'light-new');
    if (themeSelect) {
      themeSelect.value = mode;
    }
    document.body.classList.toggle('dark-mode', mode === 'dark');
  });

  // Function to send theme mode update to managed tabs
  function updateManagedTabs(newMode) {
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(tab => {
        if (tab.url.includes('mgntproject.com') || tab.url.includes('iimwin.com')) {
          chrome.tabs.sendMessage(tab.id, {
            action: 'setTheme',
            mode: newMode
          });
        }
      });
    });
  }

  // Handle dark mode toggle changes
  toggle.addEventListener('change', function () {
    // When toggle is checked, use the currently selected theme
    // When unchecked, use default light mode
    const selectedTheme = themeSelect.value;
    const newMode = toggle.checked ? selectedTheme : 'light';
    
    if (themeSelect) {
      themeSelect.value = newMode;
    }
    chrome.storage.local.set({ themeMode: newMode }, function () {
      updateManagedTabs(newMode);
    });
  });

  // Handle theme selection from dropdown
  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      const selectedMode = themeSelect.value;
      // Keep toggle enabled for both material modes
      toggle.checked = (selectedMode === 'dark' || selectedMode === 'light-new');
      chrome.storage.local.set({ themeMode: selectedMode }, function () {
        updateManagedTabs(selectedMode);
      });
    });
  }
});