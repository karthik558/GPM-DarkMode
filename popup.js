document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const themeSelect = document.getElementById('themeSelect');

  // Get the current theme mode from storage
  chrome.storage.local.get(['themeMode'], function (result) {
    const mode = result.themeMode || 'light';
    // Set the toggle state based on the stored theme mode (toggle checked when dark-mode or light-new)
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

  // Handle toggle changes: check the toggle state to decide the mode.
  toggle.addEventListener('change', function () {
    // When toggle is checked, use "light-new", otherwise use default "light".
    const newMode = toggle.checked ? 'light-new' : 'light';
    // Remove dark-mode class if present (assuming dark-mode applies only when newMode is dark)
    document.body.classList.toggle('dark-mode', newMode === 'dark');
    if (themeSelect) {
      themeSelect.value = newMode;
    }
    chrome.storage.local.set({ themeMode: newMode }, function () {
      updateManagedTabs(newMode);
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
      chrome.storage.local.set({ themeMode: selectedMode }, function () {
        updateManagedTabs(selectedMode);
      });
    });
  }
});