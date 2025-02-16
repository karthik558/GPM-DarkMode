const MANAGED_DOMAINS = ['mgntproject.com', 'iimwin.com'];

// Initialize settings on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ darkModeEnabled: false });
});

// Listen for extension icon clicks
chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get(['darkModeEnabled'], (result) => {
    const newState = !result.darkModeEnabled;
    chrome.storage.local.set({ darkModeEnabled: newState }, () => {
      // Update all matching tabs
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (MANAGED_DOMAINS.some(domain => tab.url.includes(domain))) {
            chrome.tabs.sendMessage(tab.id, {
              action: 'toggleDarkMode',
              enabled: newState
            });
          }
        });
      });
    });
  });
});

// Handle new tabs and refreshes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' &&
    MANAGED_DOMAINS.some(domain => tab.url.includes(domain))) {
    chrome.storage.local.get(['darkModeEnabled'], (result) => {
      chrome.tabs.sendMessage(tabId, {
        action: 'toggleDarkMode',
        enabled: result.darkModeEnabled
      });
    });
  }
});