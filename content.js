// ---------------------------
// Theme CSS Definitions
// ---------------------------

// Dark Mode CSS (your tuned version)
const darkModeCSS = `
  /* Base styles */
html {
  color-scheme: dark !important;
  scroll-behavior: smooth;
}

body {
  background-color: #292a2d !important;
  color: #ffffff;
  font-family: sans-serif !important;
  font-size: 0.9rem !important;
  line-height: 1.5;
  /* Apply a fade-in effect on page load */
  animation: fadeIn 0.4s ease-out both;
}

/* Fade-in keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
[style*="color:#555555"] {
  /* Leave intact */
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
  border-radius: 15px;
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

/* Improved button styling */
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
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}
button:hover,
.btn:hover,
.button:hover {
  background-color: #4c78ae !important;
  transform: translateY(-2px);
}

/* Tabmenu styles */
ul#tabmenu li a {
  font-size: 0.9rem !important;
  padding: 8px 14px !important;
  background-color: #4c78ae !important;
  color: #ffffff !important;
  border: 0.1px solid #4c78ae !important;
  border-right: 0.1px solid #4c78ae !important;
  border-radius: 15px !important;
  transition: background-color 0.2s ease-in-out !important;
}

ul#tabmenu li {
  padding: 3px !important;
}

ul#tabmenu li a.selected {
  background-color: rgb(33, 74, 123) !important;
}

ul#tabmenu li a:hover {
  background-color: #6aa5ed !important;
}

/* Header and content */
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
  background-color: #6aa5ed !important;
}

.c-no-item-wrapper {
  border: 0.5px solid #e7eaec;
  border-radius: 15px;
}

.c-table td a {
  font-weight: 600 !important;
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

.message td {
  background-color: #4c78ae !important;
  padding: 5px;
}

.c-breadcrumb {
  background-color: #2a2a2a !important;
}

.c-breadcrumb .breadcrumb-item a {
  color: rgb(80, 139, 211) !important;
  text-decoration: none;
}

/* Alert styles */
.alert-success {
  color: #2fc150 !important;
  background-color: rgb(193, 254, 207) !important;
}

.ui-datepicker .ui-datepicker-title {
  color: #ffffff !important;
}

/* Close button */
a.closebtn {
  background-color: #4c78ae !important;
  border-radius: 15px;
  color: #ffffff !important;
}
a.closebtn:hover {
  background-color: #335f95 !important;
}

.mod_cancel {
  background-color: #bb0000 !important;
  border-radius: 15px;
  margin: 6px;
}
.mod_cancel:hover {
  background-color: #880303 !important;
}

.progress-bar {
  background-color: #2fc150 !important;
}

.label-info, .badge-info {
  background-color: #c60000 !important;
}

.box {
  border: 0px !important;
}

.popup .popuptext {
  background-color: #3084c6 !important;
  color: #ffffff !important;
}

.c-ibox-value span {
  background-color: #c60000 !important;
}

.calendar tbody .day {
  color: #fff !important;
}

/* Button variations */
.button,
.btn,
.button {
  background-color: #4c78ae !important;
}
.button:hover,
.btn:hover,
.button:hover {
  background-color: #6aa5ed !important;
}

.btn-info {
  color: #fff;
  background-color: #4c78ae;
  border-color: #6aa5ed;
  border-radius: 15px;
}
.btn-info:hover {
  background-color: #6aa5ed;
}

.btn-success {
  color: #fff;
  background-color: #1c84c6;
  border-color: #6aa5ed;
  border-radius: 15px;
  padding: 4px 13px !important;
}

.uidisp {
  background-color: #4c78ae !important;
}

.delete-icon {
  color: rgb(255, 255, 255) !important;
}

.fixed-dimensions-btn {
  background-color: #4c78ae !important;
  border-radius: 15px;
}
.fixed-dimensions-btn:hover {
  background-color: #6aa5ed !important;
}

.pagination > li > a,
.pagination > li > span {
  border-radius: 15px;
  margin-left: 5px;
  background-color: #6aa5ed !important;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: #4c78ae !important;
}

/* Lower link and dropdown styles */
.c-lowerlink-item {
  color: #fff;
}
.c-lowerlink-item:hover {
  color: #6aa5ed !important;
}

.c-dropdown-toggle {
  color: #fff;
}
.c-dropdown-toggle:hover {
  color: #6aa5ed !important;
}

/* Table text */
.table {
  color: #fff;
}
.c-no-item {
  color: #fff;
}
.table > tfoot > tr > th {
  color: #ffffff !important;
}

/* Anchor links */
a {
  color: #fff;
}

/* Calendar styles */
.calendar thead .title {
  color: #fff !important;
}
.calendar thead .name {
  color: #fff !important;
}
.calendar tfoot .ttip {
  color: #fff !important;
}

/* Ibox label */
.c-ibox-label {
  color: #fff !important;
}

/* Panel heading */
.panel-default > .panel-heading {
  color: #fff !important;
}

/* Form select height */
select.form-control:not([size]):not([multiple]) {
  height: 2.5rem;
}

/* Chat message avatar */
.chat-message .c-message-avatar {
  background-color: #4c78ae !important;
}

/* Form inputs in specialized form styles */
.c-form .form-group input,
.c-form .form-group select {
  border-radius: 15px;
}

/* Navbar dropdown menu */
.navbar-static-top .c-dropdown-menu li a {
  font-weight: 400 !important;
  background-color: #292a2d !important;
}

/* Dropdown menu links */
.dropdown-menu > li > a {
  color: #ffffff !important;
}
.dropdown-menu > li > a:hover {
  background-color: #4c78ae !important;
  color: #ffffff !important;
}

/* Specific element overrides */
#leftMenu {
  color: #ffffff !important;
}
#leftMenu:hover {
  color: #4c78ae !important;
}

#favoriteBtn {
  color: #ffffff !important;
}
#favoriteBtn:hover {
  color: #4c78ae !important;
}

/* Link styling */
.c-link {
  color: #fff;
  border-radius: 15px;
  padding: 5px 15px;
  background-color: #345f92;
  transition: background-color 0.2s ease-in-out, padding 0.2s ease-in-out;
  display: inline-block;
}
.c-link:hover {
  text-decoration: none;
  background-color: #6aa5ed;
}
.c-link-color {
  text-decoration: none;
}
.c-seperator {
  color: transparent;
  padding: 0 5px;
}

/* Fixed height button margin */
.btn-fixed-height {
  margin-top: 6px;
}

/* Title text styling */
.titletext {
  color: #ffffff !important;
}

/* Utility class for fade-in animation */
.fade-in {
  animation: fadeIn 0.4s ease-out both;
}

.header .c-seperator {
  color: transparent !important;
}

`;

// Light New Mode CSS (variant of dark theme with white backgrounds and dark text)
// This CSS retains a similar structure but:
// - Uses a light color scheme
// - Sets structural backgrounds to white (#ffffff)
// - Ensures text is dark and adjusts controls accordingly
const lightNewCSS = `
  /* Base styles */
html {
  color-scheme: light !important;
  /* Smooth scrolling for in-page navigation */
  scroll-behavior: smooth;
}
body {
  background-color: #ffffff !important;
  font-family: sans-serif !important;
  font-size: 0.9rem !important;
  line-height: 1.5;
  color: #000000 !important;
  /* Fade-in effect for page load */
  animation: fadeIn 0.4s ease-out both;
}

/* Fade-in keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Background colors for structural elements */
div, section, article, aside, nav, main, header, footer {
  /* background-color: #ffffff !important; */
}

/* Headings */
h1, .heading h1 {
  color: #000000 !important;
}

/* Reset pagination background */
.pagination > li > a,
.pagination > li > span {
  background-color: transparent !important;
  border-color: #5f6368 !important;
  color: #000000 !important;
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
  background-color: #f0f0f0 !important;
  color: #000000 !important;
}

/* Preserve custom colors */
[style*="color: rgb(202, 218, 231)"],
[style*="color: #555555"],
[style*="color:#555555"] {
  /* Leave intact */
}

/* Convert light colors to darker shades */
[style*="color: #e5e7e9"],
[style*="color:#e5e7e9"],
[style*="color: rgb(229, 231, 233)"] {
  color: #2d2d2d !important;
}

/* Adjust text colors for readability */
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
  color: #000000 !important;
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
  color: #000000 !important;
  fill: #000000 !important;
}

/* Forms and inputs */
input, textarea, select {
  background-color: #ffffff !important;
  border-color: #000000 !important;
  color: #000000 !important;
  margin: 0px 5px 0px 10px;
  border-radius: 15px;
}

/* Tables */
table, th, td {
  background-color: #ffffff !important;
  border-color: #5f6368 !important;
}

/* Override light backgrounds */
[class*="bg-white"],
[class*="bg-light"] {
  background-color: #ffffff !important;
}

/* Preserve images */
img {
  filter: brightness(1);
}

/* Button styling */
button,
.btn,
.button {
  background-color: #e0e0e0 !important;
  color: #000000 !important;
  border: 1px solid #4c78ae !important;
  padding: 4px 13px !important;
  border-radius: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}
button:hover,
.btn:hover,
.button:hover {
  background-color: #c0c0c0 !important;
  transform: translateY(-2px);
}

ul#tabmenu li a {
  font-size: 0.9rem !important;
  padding: 8px 14px !important;
  background-color: #4c78ae !important;
  color: #ffffff !important;
  border: 0.1px solid #4c78ae !important;
  border-right: 0.1px solid #4c78ae !important;
  border-radius: 15px !important;
  transition: background-color 0.2s ease-in-out !important;
}
ul#tabmenu li {
  padding: 3px !important;
}
ul#tabmenu li a.selected {
  background-color: rgb(33, 74, 123) !important;
}
ul#tabmenu li a:hover {
  background-color: #6aa5ed !important;
}
.header {
  background-color: #4c78ae !important;
}
.content th {
  color: #4c78ae !important;
}
.message-date {
  color: #3d79b3 !important;
}
.ibox-content {
  border-width: 0.4px !important;
}
.header .btn-warning {
  background-color: #6aa5ed !important;
}
.header .btn-warning:hover {
  background-color: #346198 !important;
}
.c-no-item-wrapper {
  border: 0.5px solid #e7eaec;
  border-radius: 15px;
}
.c-table td a {
  font-weight: 600 !important;
}
.k-button {
  background-color: #4c78ae !important;
  color: #2a2a2a !important;
}
.redactor-toolbar {
  background-color: #4c78ae !important;
}
.redactor-toolbar li a {
  color: #ffffff !important;
}
.navbar-expand-sm .navbar-nav {
  /* background-color: #4c78ae !important; */
  /* padding-bottom: 8px; */
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
.c-breadcrumb {
  background-color: #4c78ae !important;
}
.c-breadcrumb .breadcrumb {
  background-color: #4c78ae !important;
}
.alert-success {
  color: #2fc150 !important;
  background-color: #c1fecf !important;
}
.ui-datepicker .ui-datepicker-title {
  color: #000000 !important;
}
a.closebtn {
  background-color: #4c78ae !important;
  border-radius: 15px;
  color: #ffffff !important;
}
a.closebtn:hover {
  background-color: #6aa5ed !important;
}
.mod_cancel {
  background-color: #bb0000 !important;
  border-radius: 15px;
  margin: 6px;
  color: #ffffff !important;
}
.mod_cancel:hover {
  background-color: #880303 !important;
}
.box {
  border: 0px !important;
}
.progress-bar {
  background-color: #2fc150 !important;
}
.label-info, .badge-info {
  background-color: #c60000 !important;
}
.popup .popuptext {
  background-color: #4c78ae !important;
  color: #ffffff !important;
}
.c-ibox-value span {
  background-color: #c60000 !important;
  color: #ffffff !important;
}
.calendar tbody .day {
  color: #000000 !important;
}
.button, .btn, .button {
  background-color: #4c78ae !important;
  color: #ffffff !important;
}
.button:hover, .btn:hover, .button:hover {
  background-color: #6aa5ed !important;
}
.btn-info {
  color: #fff;
  background-color: #4c78ae;
  border-color: #6aa5ed;
  border-radius: 15px;
}
.btn-info:hover {
  background-color: #6aa5ed;
}
.btn-success {
  color: #fff;
  background-color: #1c84c6;
  border-color: #6aa5ed;
  border-radius: 15px;
  padding: 4px 13px !important;
}
.uidisp {
  background-color: #4c78ae !important;
}
.delete-icon {
  color: rgb(255, 255, 255) !important;
}
.fixed-dimensions-btn {
  background-color: #4c78ae !important;
  border-radius: 15px;
}
.fixed-dimensions-btn:hover {
  background-color: #6aa5ed !important;
}
.pagination > li > a, .pagination > li > span {
  border-radius: 15px;
  margin-left: 5px;
  background-color: #6aa5ed !important;
  color: #ffffff !important;
}
.pagination > li > a, .pagination > li > span:hover {
  background-color: #4c78ae !important;
}
.chat-message .c-message-avatar {
  background-color: #4c78ae !important;
}
.c-dropdown-toggle {
  color: #000000;
}
.c-dropdown-toggle:hover {
  color: #6aa5ed !important;
}
.c-dropdown-toggle:selected {
  color:#ff0000 !important;
}
.c-lowerlink-item {
  color: #000000;
}
.c-lowerlink-item:hover {
  color: #6aa5ed !important;
}
.c-form .form-group input, .c-form .form-group select {
  border-radius: 15px;
  border: 5px;
}
.navbar-static-top .c-dropdown-menu li a {
  font-weight: 400 !important;
  background-color: #ffffff !important;
}
.dropdown-menu > li > a {
  color: #000000 !important;
}
.dropdown-menu>li>a:hover {
  color: #345f92 !important;
}
/*
.dropdown-menu,
.dropdown-content,
.select-menu,
select option,
[role="menu"],
[role="listbox"],
.dropdown-item,
.select-option {
  // background-color: #345f92 !important;
}
*/
#leftMenu {
  color: #ffffff !important;
}
#leftMenu:hover {
  /* Fixed typo: 'colo' changed to 'color' */
  color: #000000 !important;
}
#favoriteBtn {
  color: #ffffff !important;
}
#favoriteBtn:hover {
  color: #000000 !important;
}

/* Updated .c-link styling with smooth transitions and responsive adjustments */
.c-link {
  color: #fff;
  border-radius: 15px;
  padding: 5px 15px;
  background-color: #6aa5ed;
  transition: background-color 0.2s ease-in-out, padding 0.2s ease-in-out;
  display: inline-block;
}

.c-link:hover {
  color: #fff;
  text-decoration: none;
  background-color: #346198;
}

.c-link-color {
  color: #2f84c6;
  text-decoration: none;
}

.c-seperator {
  color: transparent;
  padding: 0 5px;
}

.btn-fixed-height {
  margin-top: 6px;
}

.fade-in {
  animation: fadeIn 0.4s ease-out both;
}
`;

// ---------------------------
// Theme Application Logic
// ---------------------------

let activeTheme = "light"; // Default is Light Mode
let themeStyleElement = null;
let observer = null;

// Immediately apply the stored theme as soon as possible
chrome.storage.local.get(['themeMode'], (result) => {
  const mode = result.themeMode || 'light';
  applyTheme(mode);
});

// showPage: Ensures the page becomes visible
function showPage() {
  const preStyle = document.getElementById("pre-dark-mode");
  if (preStyle) {
    preStyle.remove();
  }
  document.body.style.opacity = "1";
}

// removeCurrentTheme: Remove any previously applied theme
function removeCurrentTheme() {
  if (themeStyleElement) {
    themeStyleElement.remove();
    themeStyleElement = null;
  }
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

// setupObserver: Sets up a MutationObserver in case dynamic DOM changes require extra adjustments
function setupObserver() {
  if (observer) {
    observer.disconnect();
  }
  observer = new MutationObserver((mutations) => {
    // In our themes the CSS should cover new elements.
    // If additional processing is needed, it can be added here.
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });
}

// applyTheme: Applies the provided theme based on the mode string
function applyTheme(mode) {
  // Remove any existing theme styles
  removeCurrentTheme();

  if (mode === "dark") {
    themeStyleElement = document.createElement("style");
    themeStyleElement.id = "extension-dark-theme";
    themeStyleElement.textContent = darkModeCSS;
    document.documentElement.appendChild(themeStyleElement);
    setupObserver();
  } else if (mode === "light-new") {
    themeStyleElement = document.createElement("style");
    themeStyleElement.id = "extension-light-new-theme";
    themeStyleElement.textContent = lightNewCSS;
    document.documentElement.appendChild(themeStyleElement);
    setupObserver();
  } else {
    // Light mode (default): no extra stylesheet is injected.
    // Any previously injected rules are removed.
  }
  activeTheme = mode;
  showPage();
}

// ---------------------------
// Message Listener for Theme Switching
// ---------------------------

// Listen for runtime messages (theme changes) and update styling accordingly
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'setTheme') {
    // Remove old theme classes before applying the new one
    document.documentElement.classList.remove('dark-mode', 'light-new-mode');
    applyTheme(msg.mode);
  }
});

// ---------------------------
// Initial Setup
// ---------------------------

// If needed, you can add your safety timeout pre-style directly into the page via the manifest's content script injection.
// Here we assume the page starts in a hidden state and then becomes visible once the theme is applied.
// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", () => {
//     applyTheme(activeTheme);
//   });
// } else {
//   applyTheme(activeTheme);
// }