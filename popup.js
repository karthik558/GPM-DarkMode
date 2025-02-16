document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  // const timeDisplay = document.querySelector('.current-time');
  // const userDisplay = document.querySelector('.current-user');

  // Get current state
  chrome.storage.local.get(['darkModeEnabled'], function (result) {
    toggle.checked = result.darkModeEnabled;
    document.body.classList.toggle('dark-mode', toggle.checked);
  });

  // Update time and user info with exact format
  function updateTimeAndUser() {
    const now = new Date();
    const timeStr = now.toISOString()
      .replace('T', ' ')
      .substring(0, 19);

    // Set the exact format with newlines
    // timeDisplay.textContent = 'Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): ' + timeStr;
    // userDisplay.textContent = 'Current User\'s Login: karthik558';

    // Style both elements
    // [timeDisplay, userDisplay].forEach(element => {
    //   element.style.display = 'block';
    //   element.style.marginBottom = '8px';
    //   element.style.color = '#3d79b3';
    //   element.style.fontFamily = 'Courier New, monospace';
    // });
  }

  // Initial update
  updateTimeAndUser();
  // Update every second
  setInterval(updateTimeAndUser, 1000);

  // Handle toggle
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