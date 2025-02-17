// Initial setup with safety timeout
(function () {
  const preStyle = document.createElement('style');
  preStyle.id = 'pre-dark-mode';
  preStyle.textContent = `
        body {
            opacity: 0 !important;
            transition: opacity 0.1s ease-in !important;
        }
    `;
  document.documentElement.appendChild(preStyle);

  // Safety timeout to ensure page always becomes visible
  setTimeout(() => {
    const preStyle = document.getElementById('pre-dark-mode');
    if (preStyle) {
      preStyle.remove();
      document.body.style.opacity = '1';
    }
  }, 1500);
})();

let darkModeStylesheet = null;
let observer = null;
let initializeAttempts = 0;

const darkModeCSS = `
  /* Base styles */
  html {
    color-scheme: dark !important;
  }

  body {
    background-color: #292a2d !important;
    font-family: sans-serif !important;
    font-size: 0.9rem !important;
    line-height: 1.5;
  }
    
  /* Background colors */
  div, section, article, aside, nav, main, header, footer {
    background-color: #292a2d !important;
  }

  /* Remove white background from .heading */
  .heading {
    background-color: transparent !important;
  }

  /* Make h1 white */
  h1, .heading h1 {
    color: #ffffff !important;
  }

  /* Reset pagination background */
  .pagination > li > a,
  .pagination > li > span {
    background-color: transparent !important;
    border-color: #5f6368 !important;
    color: #ffffff !important;
  }

  /* Reset breadcrumbs background */
  .breadcrumbs,
  .breadcrumb,
  .breadcrumb-item,
  nav[aria-label="breadcrumb"] {
    background-color: transparent !important;
  }

  /* UTC DateTime and User Login specific styles */
  [data-content*="Current Date and Time (UTC"]::before,
  [data-content*="Current User's Login:"]::before,
  *:has(> :contains("Current Date and Time (UTC")),
  *:has(> :contains("Current User's Login:")),
  .datetime-display,
  .user-login-display {
    color: #3d79b3 !important;
    background-color: transparent !important;
    font-family: monospace !important;
  }

  /* Enhanced dropdown styles */
  .dropdown-menu,
  .dropdown-content,
  .select-menu,
  select option,
  [role="menu"],
  [role="listbox"],
  .dropdown-item,
  .select-option {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
  }

  /* Preserve custom colors */
  [style*="color: rgb(202, 218, 231)"],
  [style*="color: #555555"],
  [style*="color:#555555"],
  }

  /* Convert #e5e7e9 to darker color */
  [style*="color: #e5e7e9"],
  [style*="color:#e5e7e9"],
  [style*="color: rgb(229, 231, 233)"] {
    color: #2d2d2d !important;
  }

  /* Target specific text colors for white conversion */
  [style*="color: #212529"],
  [style*="color:#212529"],
  [style*="color: rgb(33, 37, 41)"],
  [style*="color:#354A55"],
  [style*="color: #354A55"],
  [style*="color: rgb(53, 74, 85)"],
  [style*="color: #52616B"],
  [style*="color:#52616B"],
  [style*="color: rgb(82, 97, 107)"],
  [style*="color: #000000"],
  [style*="color:#000000"],
  [style*="color: rgb(0, 0, 0)"],
  [style*="color: black"],
  [style*="color: #686a6c"],
  [style*="color:#686a6c"],
  [style*="color: rgb(104, 106, 108)"],
  [style*="color: #333333"],
  [style*="color:#333333"],
  [style*="color: rgb(51, 51, 51)"],
  [style*="color: #676a6c"],
  [style*="color:#676a6c"],
  [style*="color: rgb(103, 106, 108)"],
  [style*="color: #2e2e2e"],
  [style*="color:#2e2e2e"],
  [style*="color: rgb(46, 46, 46)"] {
    color: #ffffff !important;
  }

  /* Handle icons */
  i[style*="color: #000000"],
  i[style*="color:#000000"],
  i[style*="color: rgb(0, 0, 0)"],
  i[style*="color: black"],
  svg[style*="color: #000000"],
  svg[style*="color:#000000"],
  svg[style*="color: rgb(0, 0, 0)"],
  svg[style*="color: black"] {
    color: #ffffff !important;
    fill: #ffffff !important;
  }

  /* Forms and inputs */
  input, textarea, select {
    background-color: #292a2d !important;
    border-color: #ffff !important;
    color: #ffffff !important;
    margin: 0px 5px 0px 10px;
  }

  /* Tables */
  table, th, td {
    background-color: #292a2d !important;
    border-color: #5f6368 !important;
  }

  /* Override white backgrounds */
  [class*="bg-white"],
  [class*="bg-light"] {
    background-color: #292a2d !important;
  }

  /* Preserve images */
  img {
    filter: brightness(0.9);
  }

  /* Improved button styling - padding removed */
  button,
  .btn,
  .button {
    background-color: #3d3d3d !important;
    color: #ffffff !important;
    border: 1px solid #4c78ae !important;
    padding: 4px 13px !important;
    border-radius: 15px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover,
  .btn:hover,
  .button:hover {
    background-color: #4c78ae !important;
  }
  ul#tabmenu li a {
    font-size: 0.9rem !important;
    padding: 8px 14px !important;
    background-color: #4c78ae !important;
    color: #ffffff !important;
    // border: 1px solid #5f6368 !important;
    border-radius: 15px !important;
    transition: background-color 0.2s ease-in-out !important;
  }

  ul#tabmenu li {
    padding: 3px 0px 3px 0px !important; 
  }

  ul#tabmenu li a.selected {
    background-color:rgb(33, 74, 123) !important;
  }
    
  ul#tabmenu li a:hover {
    background-color:rgb(106, 165, 237) !important;
  }
  
  .header {
    background-color: #292a2d !important;
  }

  .content th {
    color: #4c78ae !important;
  }

  .message-date {
    color: #77aae8 !important;
  }

  .ibox-content {
    border-width: 0.4px !important;
  }
  
  .header .btn-warning {
    background-color: #4c78ae !important;
  }

  .header .btn-warning:hover {
    background-color: rgb(106, 165, 237) !important;
  }
  
  .c-no-item-wrapper {
	border: 0.5px solid #e7eaec;
	border-radius: 15px;
 }

  .c-table td a {
    font-weight: 600 !important;
  }

  .navbar-static-top .c-dropdown-menu li a {
    font-weight: 400 !important;
    color: #4c78ae !important;
  }

  .k-button {
    background-color: #4c78ae !important;
    color: #2a2a2a !important;
  }
  
  .redactor-toolbar {
    background-color: #4c78ae !important;
  }

  .navbar-expand-sm .navbar-nav {
    background-color: #2a2a2a !important;
    padding-bottom: 8px;    
  }

  .c-remove-text {
    padding: 8px 15px 0px 0px !important;
  }
  
  .c-icon-style {
  background-color: #4c78ae !important;
  }

  .top-navigation .navbar-nav .c-dropdown-menu {
  border-color: #4c78ae !important;
  }

  // .message td {
  //   background-color: #4c78ae !important;
  // }

  .c-breadcrumb {
    background-color: #4c78ae !important;
  }

  .c-breadcrumb .breadcrumb {
    background-color: #4c78ae !important;
  }

  .alert-success {
    color: #2fc150 !important !important;
    background-color:rgb(193, 254, 207) !important;
  }
  
  .ui-datepicker .ui-datepicker-title {
    color: #ffffff !important;
  }
  
  a.closebtn {
    background-color: #4c78ae !important;
  }
  
  a.closebtn:hover {
    background-color: rgb(106, 165, 237) !important;
  }

  .progress-bar { 
    background-color: #2fc150 !important;
  }

  .label-info, .badge-info {
    background-color:rgb(198, 0, 0) !important;
  }

  .popup .popuptext {
    background-color: #4c78ae !important;
  }
`;

function showPage() {
  const preStyle = document.getElementById('pre-dark-mode');
  if (preStyle) {
    document.body.style.opacity = '1';
    preStyle.remove();
  }
}

function shouldPreserveColor(color) {
  const preserveColors = [
    '#4882c1', 'rgb(72, 130, 193)',
    '#3c34e2', 'rgb(60, 52, 226)',
    'red', 'green', 'yellow', 'blue'
  ];
  return preserveColors.some(preserveColor => color.includes(preserveColor));
}

function shouldChangeToWhite(color) {
  const targetColors = [
    '#212529', 'rgb(33, 37, 41)',
    '#52616B', 'rgb(82, 97, 107)',
    '#354A55', 'rgb(53, 74, 85)',
    '#000000', 'rgb(0, 0, 0)', 'black',
    '#686a6c', 'rgb(104, 106, 108)',
    '#333333', 'rgb(51, 51, 51)',
    '#676a6c', 'rgb(103, 106, 108)',
    '#2e2e2e', 'rgb(46, 46, 46)'
  ];
  return targetColors.some(targetColor => color.includes(targetColor));
}

function shouldChangeToEdaf67(color) {
  const targetColors = [
    '#555555', 'rgb(85, 85, 85)'
  ];
  return targetColors.some(targetColor => color.includes(targetColor));
}

function shouldChangeToDarker(color) {
  const targetColors = [
    '#e5e7e9', 'rgb(229, 231, 233)'
  ];
  return targetColors.some(targetColor => color.includes(targetColor));
}

function adjustSpecialElements() {
  // Handle UTC time format
  document.querySelectorAll('*').forEach(el => {
    const text = el.textContent;
    if (text) {
      // Match specific UTC date-time format
      if (text.match(/Current Date and Time \(UTC - YYYY-MM-DD HH:MM:SS formatted\):/)) {
        el.classList.add('datetime-display');
      }
      // Match specific user login format
      if (text.match(/Current User's Login: karthik\d+/)) {
        el.classList.add('user-login-display');
      }
    }
  });

  // Handle pagination and breadcrumbs
  document.querySelectorAll('.pagination > li > a, .pagination > li > span, .breadcrumbs, .breadcrumb, .breadcrumb-item').forEach(el => {
    el.style.setProperty('background-color', 'transparent', 'important');
  });
}

function adjustColors() {
  try {
    requestAnimationFrame(() => {
      document.querySelectorAll('*').forEach(el => {
        try {
          const style = window.getComputedStyle(el);
          const currentColor = style.color;

          if (shouldPreserveColor(currentColor)) {
            return;
          }

          // if (shouldChangeToEdaf67(currentColor)) {
          //   el.style.setProperty('color', '#edaf67', 'important');
          //   return;
          // }

          if (shouldChangeToDarker(currentColor)) {
            el.style.setProperty('color', '#2d2d2d', 'important');
            return;
          }

          if (shouldChangeToWhite(currentColor)) {
            el.style.setProperty('color', '#ffffff', 'important');
            if (el.tagName.toLowerCase() === 'svg' || el.tagName.toLowerCase() === 'i') {
              el.style.setProperty('fill', '#ffffff', 'important');
            }
          }
        } catch (elementError) {
          // Skip problematic elements
        }
      });

      adjustSpecialElements();
    });
  } catch (error) {
    console.error('Error adjusting colors:', error);
    showPage();
  }
}

function enableDarkMode() {
  try {
    if (!darkModeStylesheet) {
      darkModeStylesheet = document.createElement('style');
      darkModeStylesheet.id = 'smart-dark-mode-styles';
      darkModeStylesheet.textContent = darkModeCSS;
      document.documentElement.appendChild(darkModeStylesheet);

      requestAnimationFrame(() => {
        adjustColors();
        showPage();
      });

      if (observer) {
        observer.disconnect();
      }

      observer = new MutationObserver((mutations) => {
        let shouldAdjust = false;
        for (const mutation of mutations) {
          if (mutation.addedNodes.length ||
            mutation.attributeName === 'style' ||
            mutation.attributeName === 'class') {
            shouldAdjust = true;
            break;
          }
        }
        if (shouldAdjust) {
          requestAnimationFrame(adjustColors);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
  } catch (error) {
    console.error('Error enabling dark mode:', error);
    showPage();
  }
}

function disableDarkMode() {
  if (darkModeStylesheet) {
    darkModeStylesheet.remove();
    darkModeStylesheet = null;

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    document.querySelectorAll('[style*="color"]').forEach(el => {
      if (el.style.getPropertyPriority('color') === 'important') {
        el.style.removeProperty('color');
      }
      if (el.style.getPropertyPriority('fill') === 'important') {
        el.style.removeProperty('fill');
      }
    });
  }
}

function initializeDarkMode() {
  initializeAttempts++;

  chrome.storage.local.get(['darkModeEnabled'], (result) => {
    if (result.darkModeEnabled) {
      enableDarkMode();
    }

    setTimeout(showPage, 50);

    setTimeout(() => {
      if (document.body.style.opacity === '0') {
        document.body.style.opacity = '1';
      }
    }, 300);
  });

  if (initializeAttempts < 3) {
    setTimeout(() => {
      if (!darkModeStylesheet && document.body.style.opacity === '0') {
        initializeDarkMode();
      }
    }, 500);
  } else {
    showPage();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
  initializeDarkMode();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleDarkMode') {
    toggleDarkMode(request.enabled);
  }
});

function toggleDarkMode(enabled) {
  if (enabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}