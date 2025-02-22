document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const themeSelect = document.getElementById('themeSelect');
  // const timeDisplay = document.querySelector('.current-time');
  // const userDisplay = document.querySelector('.current-user');

  // Get the current theme mode from storage (default is "light")
  chrome.storage.local.get(['themeMode'], function (result) {
    const mode = result.themeMode || 'light';
    // For backward compatibility, set the toggle state
    toggle.checked = (mode === 'dark');
    if (themeSelect) {
      themeSelect.value = mode;
    }
    // Update popup body styling (optional, as content scripts handle page themes)
    document.body.classList.toggle('dark-mode', mode === 'dark');
  });

  // Update the time and user display elements
  // function updateTimeAndUser() {
  //   const now = new Date();
  //   const timeStr = now.toISOString().replace('T', ' ').substring(0, 19);
  //   timeDisplay.textContent =
  //     'Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): ' + timeStr;

  //   // Apply styling to time and user elements
  //   [timeDisplay, userDisplay].forEach(element => {
  //     element.style.display = 'block';
  //     element.style.marginBottom = '5px';
  //     element.style.color = '#3d79b3';
  //     element.style.fontFamily = 'Courier New, monospace';
  //   });
  // }

  // Get profile user info using chrome.identity (requires "identity" permission)
  // chrome.identity.getProfileUserInfo(function (userInfo) {
  //   if (userInfo.email) {
  //     userDisplay.textContent = "Current User's Login: " + userInfo.email;
  //   } else {
  //     userDisplay.textContent = "Current User's Login: Unknown";
  //   }
  // });

  // Initial update of time and user displays
  // updateTimeAndUser();
  // setInterval(updateTimeAndUser, 1000);

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

  // Handle dark mode toggle changes; sets mode to "dark" if checked, "light" otherwise.
  toggle.addEventListener('change', function () {
    const newMode = toggle.checked ? 'dark' : 'light';
    if (themeSelect) {
      themeSelect.value = newMode;
    }
    chrome.storage.local.set({ themeMode: newMode }, function () {
      updateManagedTabs(newMode);
    });
  });

  // Handle theme selection from dropdown for mode switching ("light", "dark", "light-new")
  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      const selectedMode = themeSelect.value;
      // Update the toggle for backward compatibility if "dark" is selected
      toggle.checked = (selectedMode === 'dark');
      chrome.storage.local.set({ themeMode: selectedMode }, function () {
        updateManagedTabs(selectedMode);
      });
    });
  }
});