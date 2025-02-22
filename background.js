const MANAGED_DOMAINS = ['mgntproject.com', 'iimwin.com'];
// Allowed theme modes
const MODES = ["light", "dark", "light-new"];

// Initialize default theme mode on installation (default is Light Mode)
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ themeMode: "light" });
});

// Utility function to cycle to the next theme mode
function getNextThemeMode(currentMode) {
  const currentIndex = MODES.indexOf(currentMode);
  if (currentIndex === -1) {
    return MODES[0];
  }
  return MODES[(currentIndex + 1) % MODES.length];
}

// Listen for extension icon clicks to cycle through themes
chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get(['themeMode'], (result) => {
    const currentMode = result.themeMode || "light";
    const newMode = getNextThemeMode(currentMode);
    chrome.storage.local.set({ themeMode: newMode }, () => {
      // Send updated theme to all managed tabs
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (MANAGED_DOMAINS.some(domain => tab.url.includes(domain))) {
            chrome.tabs.sendMessage(tab.id, {
              action: 'setTheme',
              mode: newMode
            });
          }
        });
      });
    });
  });
});

// Ensure new tabs or refreshed tabs using managed domains get the current theme
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' &&
    MANAGED_DOMAINS.some(domain => tab.url.includes(domain))) {
    chrome.storage.local.get(['themeMode'], (result) => {
      const currentMode = result.themeMode || "light";
      chrome.tabs.sendMessage(tabId, {
        action: 'setTheme',
        mode: currentMode
      });
    });
  }
});