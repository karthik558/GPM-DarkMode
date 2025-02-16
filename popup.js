document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const timeDisplay = document.querySelector('.current-time');
  const userDisplay = document.querySelector('.current-user');

  // Get current dark mode state from storage
  chrome.storage.local.get(['darkModeEnabled'], function (result) {
    toggle.checked = result.darkModeEnabled;
    document.body.classList.toggle('dark-mode', toggle.checked);
  });

  // Update time display and apply styling
  function updateTimeAndUser() {
    const now = new Date();
    const timeStr = now.toISOString().replace('T', ' ').substring(0, 19);
    timeDisplay.textContent =
      'Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): ' + timeStr;

    // Apply block display and styling to time and user elements
    [timeDisplay, userDisplay].forEach(element => {
      element.style.display = 'block';
      element.style.marginBottom = '8px';
      element.style.color = '#3d79b3';
      element.style.fontFamily = 'Courier New, monospace';
    });
  }

  // Use chrome.identity.getProfileUserInfo to get the user profile info (requires "identity" permission)
  chrome.identity.getProfileUserInfo(function (userInfo) {
    if (userInfo.email) {
      userDisplay.textContent = "Current User's Login: " + userInfo.email;
    } else {
      userDisplay.textContent = "Current User's Login: Unknown";
    }
  });

  // Initial update
  updateTimeAndUser();
  // Update the time display every second
  setInterval(updateTimeAndUser, 1000);

  // Handle dark mode toggle change
  toggle.addEventListener('change', function () {
    const isEnabled = toggle.checked;
    document.body.classList.toggle('dark-mode', isEnabled);
    chrome.storage.local.set({ darkModeEnabled: isEnabled }, function () {
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(tab => {
          if (tab.url.includes('mgntproject.com') || tab.url.includes('iimwin.com')) {
            chrome.tabs.sendMessage(tab.id, {
              action: 'toggleDarkMode',
              enabled: isEnabled
            });
          }
        });
      });
    });
  });
});