const MANAGED_DOMAINS = ['mgntproject.com', 'iimwin.com'];
// Allowed theme modes
const MODES = ["light", "dark", "light-new", "light-dark", "light-purple"];

// Get the browser API
const browser = typeof chrome !== 'undefined' ? chrome : browser;

// Initialize default theme mode on installation (default to Material Light)
browser.runtime.onInstalled.addListener(() => {
  browser.storage.local.set({ themeMode: "light-new" });
});

// Handle browser startup - ensure theme persists across restarts
browser.runtime.onStartup.addListener(() => {
  // Check if theme is already set, if not, default to light-new
  browser.storage.local.get(['themeMode'], (result) => {
    if (!result.themeMode) {
      browser.storage.local.set({ themeMode: "light-new" });
    }
  });
});

// Utility function to cycle to the next theme mode
function getNextThemeMode(currentMode) {
  const currentIndex = MODES.indexOf(currentMode);
  if (currentIndex === -1) {
    return "light-new"; // Default to light-new if invalid mode
  }
  return MODES[(currentIndex + 1) % MODES.length];
}

// Listen for extension icon clicks to cycle through themes
browser.action.onClicked.addListener(() => {
  browser.storage.local.get(['themeMode'], (result) => {
    const currentMode = result.themeMode || "light";
    const newMode = getNextThemeMode(currentMode);
    browser.storage.local.set({ themeMode: newMode }, () => {
      // Send updated theme to all managed tabs
      browser.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (MANAGED_DOMAINS.some(domain => tab.url.includes(domain))) {
            browser.tabs.sendMessage(tab.id, {
              action: 'setTheme',
              mode: newMode
            }).catch(error => {
              // Handle potential messaging errors
              console.error('Failed to send message to tab:', error);
            });
          }
        });
      });
    });
  });
});

// Ensure new tabs or refreshed tabs using managed domains get the current theme
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' &&
    MANAGED_DOMAINS.some(domain => tab.url.includes(domain))) {
    browser.storage.local.get(['themeMode'], (result) => {
      const currentMode = result.themeMode || "light-new"; // Default to light-new if nothing set
      browser.tabs.sendMessage(tabId, {
        action: 'setTheme',
        mode: currentMode
      }).catch(error => {
        // Handle potential messaging errors
        console.error('Failed to send message to tab:', error);
      });
    });
  }
});