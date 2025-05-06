// ---------------------------
// Theme CSS Definitions
// ---------------------------

// Dark Mode CSS (your tuned version)
const darkModeCSS = `
  /* Updated Awesome Dark Mode UI Styles */

/* Root variables for dark mode */
:root {
  --primary-color: #3679c8; /* Lighter blue for dark mode */
  --primary-color-hover: #214a7b;  /* Even lighter on hover */
  --secondary-color: #295d9a; /* Lighter secondary */
  --message-date-color: #326fb9; /* Lighter date color */
  --text-color-dark: #f0f0f0; /* Very light text (almost white) */
  --text-color-light: #ffffff; /* Pure white for contrast */
  --text-color-muted: #aaaaaa;  /* Lighter muted text */

  /* Backgrounds */
  --background-color-dark: #252526; /* Darker background */
  --background-color-darker: #0a0a0a; /* Even darker, almost black */
  --background-color-dark-alt: #252526;  /* Slightly lighter than background-color-dark */
  --background-color-gray: #2c2c2c; /* For buttons (slightly lighter) */
  --background-color-gray-hover: #444444; /* Hover state for gray elements */

  /* Borders & Shadows */
  --border-color-light: #444444; /* Darker border, but still visible */
  --border-color-dark: #666666;  /* For inputs, slightly lighter than border-color-light */
  --border-color-table: #444444;  /* Darker table borders */
  --border-radius: 15px;
  --border-radius-small: 15px; /* For small elements like pagination */
  --box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1); /* Subtle white shadow */
  --box-shadow-hover: 0 4px 8px rgba(255, 255, 255, 0.2); /* Stronger white shadow */

  /* Spacing & Transitions */
  --button-padding: 4px 13px;
  --transition-speed: 0.2s;

  /* Fonts */
  --font-family-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;
  --font-size-base: 1rem;

  /* Success & Danger */
  --success-color: #5cb85c; /* Lighter green */
  --success-background: #222222; /* Darker success background */
  --danger-color: #d9534f;  /* Lighter red */
  --danger-color-hover: #e0736f; /* Lighter red on hover*/
  --progress-bar-color: #5cb85c; /* Lighter green */
  --label-info-background: #42a5bb; /* Lighter info */
  --popup-background: #326fb9;  /* Lighter popup */
  --dropdown-background: #222222; /* Darker dropdown */

  /* Form controls */
  --form-control-border-radius: 15px; /* Smaller radius */
  --form-control-height: 2.5rem;

  /* Chat and other backgrounds */
  --chat-message-background: #326fb9; /* Lighter chat background*/
  --breadcrumb-link-color: #326fb9; /* Lighter blue for breadcrumbs */
  --k-button-text-color: #252526;

  /* Navbar background */
  --navbar-static-top-background: var(--background-color-dark-alt);

  /* Scrollbar styling */
  --scrollbar-track-color: #222; /* Darker track */
  --scrollbar-thumb-color: #555; /* Lighter thumb */
  --scrollbar-thumb-hover-color: #777; /* Even lighter on hover */
}

/* Base styles */
html {
  color-scheme: dark !important;
  scroll-behavior: smooth;
}

body {
  background-color: var(--background-color-dark) !important;
  color: var(--text-color-light);
  font-family: var(--font-family-sans) !important;
  font-size: var(--font-size-base) !important;
  line-height: 1.5;
  animation: fadeIn 0.4s ease-out both;
}

/* Global Transitions */
*, *::before, *::after {
  transition: background-color var(--transition-speed) ease-in-out,
              border-color var(--transition-speed) ease-in-out,
              box-shadow var(--transition-speed) ease-in-out,
              transform var(--transition-speed) ease-in-out;
}

/* Fade-in Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply dark background to structural elements */
div, section, article, aside, nav, main, header, footer {
  background-color: var(--background-color-dark) !important;
}

/* Heading adjustments */
.heading {
  background-color: transparent !important;
}

h1, .heading h1 {
  color: var(--text-color-light) !important;
}

/* Pagination styles */
.pagination > li > a,
.pagination > li > span {
  background-color: transparent !important;
  border-color: var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
  border-radius: var(--border-radius-small);
  margin-left: 4px;
  padding: 4px 8px;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border-color: var(--primary-color) !important;
}

/* Breadcrumbs */
.breadcrumbs,
.breadcrumb,
.breadcrumb-item,
nav[aria-label="breadcrumb"] {
  background-color: transparent !important;
}

/* UTC/Login Display */
[data-content*="Current Date and Time (UTC"]::before,
[data-content*="Current User's Login:"]::before,
.datetime-display,
.user-login-display {
  color: var(--secondary-color) !important;
  background-color: transparent !important;
  font-family: var(--font-family-mono) !important;
}

/* Enhanced Dropdown Styles */
.dropdown-menu,
.dropdown-content,
.select-menu,
select option,
[role="menu"],
[role="listbox"],
.dropdown-item,
.select-option {
  background-color: var(--dropdown-background) !important;
  color: var(--text-color-light) !important;
  border: 1px solid var(--border-color-light);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius-small);
}
.dropdown-item:hover,
.select-option:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border-color: var(--primary-color) !important;
  box-shadow: var(--box-shadow-hover);
}

/* Preserve custom color styles */
[style*="color: rgb(202, 218, 231)"],
[style*="color: #555555"],
[style*="color:#555555"] {
  /* Leave intact */
}

/* Convert light colors to darker shades */
[style*="color: #e5e7e9"],
[style*="color:#e5e7e9"],
[style*="color: rgb(229, 231, 233)"] {
  color: var(--background-color-darker) !important;
}

/* Force specific text colors to use light text */
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
  color: var(--text-color-light) !important;
}

/* Icon adjustments */
i[style*="color: #000000"],
i[style*="color:#000000"],
i[style*="color: rgb(0, 0, 0)"],
i[style*="color: black"],
svg[style*="color: #000000"],
svg[style*="color:#000000"],
svg[style*="color: rgb(0, 0, 0)"],
svg[style*="color: black"] {
  color: var(--text-color-light) !important;
  fill: var(--text-color-light) !important;
}

/* Forms and Inputs */
input, textarea, select {
  background-color: var(--background-color-dark) !important;
  border-color: var(--border-color-dark) !important;
  color: var(--text-color-light) !important;
  margin: 0px 5px 0px 10px;
  border-radius: var(--form-control-border-radius);
  border-style: solid;
  border-width: 1px;
  box-shadow: none !important;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-color) !important;
  box-shadow: 0 0 5px rgba(76, 120, 174, 0.7);
}

/* Tables */
table, th, td {
  background-color: var(--background-color-dark) !important;
  border-color: var(--border-color-light) !important;
}
th {
  font-weight: var(--font-weight-bold);
}

/* Override white/light backgrounds */
[class*="bg-white"],
[class*="bg-light"] {
  background-color: var(--background-color-dark) !important;
}

/* Preserve images */
img {
  filter: brightness(0.9);
}

/* Improved Button Styling */
button,
.btn,
.button {
  background-color: var(--background-color-gray) !important;
  color: var(--text-color-light) !important;
  border: 1px solid var(--primary-color) !important;
  padding: var(--button-padding) !important;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition-speed) ease-in-out,
              transform var(--transition-speed) ease-in-out,
              box-shadow var(--transition-speed) ease-in-out;
}
button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color) !important;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

/* Tabmenu Styles */
ul#tabmenu li a {
  font-size: var(--font-size-base) !important;
  padding: 8px 14px !important;
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border: 0.1px solid var(--primary-color) !important;
  border-right: 0.1px solid var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
}
ul#tabmenu li {
  padding: 3px !important;
}
ul#tabmenu li a.selected {
  background-color: var(--primary-color-hover) !important;
}
ul#tabmenu li a:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Header and Content */
.header {
  background-color: var(--background-color-dark) !important;
}
.content th {
  color: var(--primary-color) !important;
}
.message-date {
  color: var(--text-color-light) !important;
}
.ibox-content {
  border-width: 0.4px !important;
  box-shadow: var(--box-shadow);
}

.ibox-title {
  border-width: 0.1px !important;
  background-color: transparent !important;
  border-style: none !important;
}

.header .btn-warning {
  background-color: var(--primary-color) !important;
}
.header .btn-warning:hover {
  background-color: var(--primary-color-hover) !important;
}

.c-no-item-wrapper {
  border: 0.5px solid #e7eaec;
  border-radius: var(--border-radius);
}

.c-table td a {
  font-weight: 600 !important;
}

.k-button {
  background-color: var(--primary-color) !important;
  color: var(--k-button-text-color) !important;
}

.redactor-toolbar {
  background-color: var(--primary-color) !important;
}

.navbar-expand-sm .navbar-nav {
  background-color: var(--background-color-dark-alt) !important;
  padding-bottom: 8px;
}

.c-remove-text {
  padding: 8px 15px 0px 0px !important;
}

.c-icon-style {
  background-color: var(--primary-color) !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-light);
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.c-icon-style:hover {
  transform: scale(1.1);
  box-shadow: var(--box-shadow-hover);
}

.top-navigation .navbar-nav .c-dropdown-menu {
  border-color: var(--primary-color) !important;
}

.message {
background-color: #3779c836 !important;
border-radius: var(--border-radius);
}

.message td {
  background-color: var(--primary-color) !important;
  padding: 5px;
}

.c-breadcrumb {
  background-color: var(--background-color-dark-alt) !important;
}

.c-breadcrumb .breadcrumb-item a {
  color: var(--breadcrumb-link-color) !important;
  text-decoration: none;
}

/* Alert Styles */
.alert-success {
  color: var(--success-color) !important;
  background-color: var(--success-background) !important;
  border-color: var(--success-color);
  border-radius: var(--border-radius-small);
}

/* Datepicker Title */
.ui-datepicker .ui-datepicker-title {
  color: var(--text-color-light) !important;
}

/* Close Button */
a.closebtn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
  color: var(--text-color-light) !important;
}
a.closebtn:hover {
  background-color: #335f95 !important;
}

/* Cancel Button */
.mod_cancel {
  background-color: var(--danger-color) !important;
  border-radius: var(--border-radius);
  margin: 6px;
}
.mod_cancel:hover {
  background-color: var(--danger-color-hover) !important;
}

/* Progress Bar */
.progress-bar {
  background-color: var(--progress-bar-color) !important;
}

/* Label / Badge */
.label-info,
.badge-info {
  background-color: var(--label-info-background) !important;
}

/* Popup */
.popup .popuptext {
  background-color: var(--popup-background) !important;
  color: var(--text-color-light) !important;
}

/* Ibox Value */
.c-ibox-value span {
  background-color: var(--danger-color) !important;
}

/* Calendar Day */
.calendar tbody .day {
  color: var(--text-color-light) !important;
}

/* Button Variations */
.button,
.btn,
.button {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color-hover) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.btn-info {
  color: #fff;
  background-color: var(--primary-color);
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
}
.btn-info:hover {
  background-color: var(--primary-color-hover);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.btn-success {
  color: #fff;
  background-color: #1c84c6;
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
  padding: var(--button-padding) !important;
}

.btn-success:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

.uidisp {
  background-color: var(--primary-color) !important;
}

.delete-icon {
  color: rgb(255, 255, 255) !important;
}

.fixed-dimensions-btn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
}
.fixed-dimensions-btn:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Pagination Revisited */
.pagination > li > a,
.pagination > li > span {
  border-radius: var(--border-radius);
  margin-left: 5px;
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Lower Link and Dropdown */
.c-lowerlink-item {
  color: var(--text-color-light);
}
.c-lowerlink-item:hover {
  color: var(--primary-color-hover) !important;
}

.c-dropdown-toggle {
  color: var(--text-color-light);
}
.c-dropdown-toggle:hover {
  color: var(--primary-color-hover) !important;
}

/* Table Text */
.table {
  color: var(--text-color-light);
}
.c-no-item {
  color: var(--text-color-light);
}
.table > tfoot > tr > th {
  color: var(--text-color-light) !important;
}

/* Anchor Links */
a {
  color: var(--text-color-light);
}

/* Calendar Header */
.calendar thead .title,
.calendar thead .name,
.calendar tfoot .ttip {
  color: var(--text-color-light) !important;
}

/* Ibox Label */
.c-ibox-label {
  color: var(--text-color-light) !important;
}

/* Panel Heading */
.panel-default > .panel-heading {
  color: var(--text-color-light) !important;
}

/* Form Select Height */
select.form-control:not([size]):not([multiple]) {
  height: var(--form-control-height);
}

/* Chat Message Avatar */
.chat-message .c-message-avatar {
  background-color: var(--chat-message-background) !important;
}

/* Specialized Form Group Inputs */
.c-form .form-group input,
.c-form .form-group select {
  border-radius: var(--form-control-border-radius) !important;
  border: 1px solid var(--border-color-light);
}

/* Navbar Dropdown Menu */
.navbar-static-top .c-dropdown-menu li a {
  font-weight: var(--font-weight-normal) !important;
  background-color: var(--navbar-static-top-background) !important;
}

/* Dropdown Menu Links */
.dropdown-menu > li > a {
  color: var(--text-color-light) !important;
}
.dropdown-menu > li > a:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}

/* Specific Element Overrides */
#leftMenu {
  color: var(--text-color-light) !important;
}
#leftMenu:hover {
  color: var(--primary-color) !important;
}

#favoriteBtn {
  color: var(--text-color-light) !important;
}
#favoriteBtn:hover {
  color: var(--primary-color) !important;
}

/* Link Styling */
.c-link {
  color: var(--text-color-light);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background-color: var(--primary-color);
  display: inline-block;
}
.c-link:hover {
  color: var(--text-color-light);
  text-decoration: none;
  background-color: var(--primary-color-hover) !important;
  outline: 1px solid var(--primary-color) !important;
  transform: translateY(-2px);
}
.c-link-color {
  color: var(--primary-color) !important;
  text-decoration: none;
}
.c-seperator {
  color: transparent;
  padding: 0 5px;
}

/* Fixed Height Button Margin */
.btn-fixed-height {
  margin-top: 6px;
}

/* Title Text Styling */
.titletext {
  color: var(--text-color-light) !important;
}

/* Fade-In Utility */
.fade-in {
  animation: fadeIn 0.4s ease-out both;
}

.header .c-seperator {
  color: transparent !important;
}

.form-inline .form-control,
.divfilter select {
  border-radius: var(--border-radius);
}

/* Table Border */
.table-bordered {
  border: 0.5px solid var(--border-color-table) !important;
}

/* Card Body Styling */
.card {
 background-color: var(--background-color-light) !important;
 border: none !important;
}

.card-body {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
  padding: 15px !important;
  box-shadow: var(--box-shadow) !important;
}

/* Scrollbar Styling (Webkit) */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color);
  border-radius: var(--border-radius);
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color);
  border-radius: var(--border-radius);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-color);
}

/* Firefox Scrollbar Styling */
html {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
}

.c-title-strip {
  background-color: var(--primary-color-hover) !important;
  color: var(--text-color-light) !important;
}

.chat-discussion {
  background: var(--background-color-dark) !important;
  border-radius: var(--border-radius) !important;
}

.col-lg-12 {
  background: none !important;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
}

.top-navigation .navbar-nav .dropdown-menu {
  border: none !important;
}

.c-logo img {
  filter: brightness(1) !important;
  transition: filter 0.2s ease-in-out;
}

.c-logo img:hover {
  filter: brightness(0.8) !important;
  cursor: pointer;
}

.graph-cell {
border-radius: var(--border-radius) !important;
box-shadow: var(--box-shadow) !important;
}

`;

// Light Mode CSS (your tuned version)
const lightNewCSS = `
  /* Base styles */
/* Updated Awesome UI Styles */

/* Base styles */
:root {
  /* Colors */
  --primary-color: #4c78ae;
  --primary-color-hover: #6aa5ed;
  --secondary-color: #3d79b3;
  --text-color-dark: #333333; /* Darker text for better readability */
  --text-color-light: #f8f8f8; /* Off-white for light theme */
  --text-color-muted: #777777; /* For less important text */

  /* Backgrounds */
  --background-color-light: #f1f5f9; /* Dropdown menu and light background */
  --background-color-dark: #2d2d2d;
  --background-color-gray: #e0e0e0;
  --background-color-gray-hover: #c0c0c0;
  --dropdown-background: #f1f5f9; /* White dropdowns */

  /* Borders & Shadows */
  --border-color-light: #cccccc; /* Lighter borders */
  --border-color-dark: #333333;
  --border-radius: 15px;
  --border-radius-small: 15px; /* For small elements like pagination */
  --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --box-shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* Spacing & Transitions */
  --button-padding: 4px 13px; /* Slightly more padding for buttons */
  --transition-speed: 0.2s; /* Consistent transition speed */

  /* Fonts */
  --font-family-sans: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --font-weight-bold: 600;

  /* Success & Danger */
  --success-color: #28a745;
  --success-background: #d4edda;
  --danger-color: #dc3545;
  --danger-color-hover: #c82333;
  --progress-bar-color: #28a745;
  --label-info-background: #17a2b8;
  --popup-background: #4c78ae;
  --chat-message-background: #4c78ae;
  --form-control-border-radius: var(--border-radius-small);
  --navbar-static-top-background: #ffffff;

  /* Scrollbar */
  --scrollbar-track-color: #f1f1f1;
  --scrollbar-thumb-color: #888;
  --scrollbar-thumb-hover-color: #555;

  /* Additional Modern Enhancements */
  --card-padding: 2rem;
  --card-margin-bottom: 2rem;
  --input-bg: #f9fafb;
  --input-focus-shadow: rgba(76, 120, 174, 0.09);
}

/* Global Settings */
html {
  color-scheme: light !important;
  scroll-behavior: smooth;
}
body {
  background-color: var(--background-color-light) !important;
  font-family: var(--font-family-sans) !important;
  font-size: var(--font-size-base) !important;
  line-height: 1.5;
  color: var(--text-color-dark) !important;
  animation: fadeIn 0.4s ease-out both;
}

/* Global Transitions */
*, *::before, *::after {
  transition: background-color var(--transition-speed) ease-in-out,
              border-color var(--transition-speed) ease-in-out,
              box-shadow var(--transition-speed) ease-in-out,
              transform var(--transition-speed) ease-in-out;
}

/* Fade-in Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Headings */
h1, .heading h1 {
  color: var(--text-color-dark) !important;
  font-weight: var(--font-weight-bold);
}

/* Pagination */
.pagination > li > a,
.pagination > li > span {
  background-color: transparent !important;
  border: 1px solid var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
  border-radius: var(--border-radius-small);
  margin-left: 4px;
  padding: 4px 8px;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border-color: var(--primary-color) !important;
}

/* Breadcrumbs & Navigation */
.breadcrumbs,
.breadcrumb,
.breadcrumb-item,
nav[aria-label="breadcrumb"] {
  background-color: transparent !important;
}

/* UTC/Login Display */
[data-content="Current Date and Time (UTC"]::before,
[data-content*="Current User's Login:"]::before,
.datetime-display,
.user-login-display {
  color: var(--secondary-color) !important;
  background-color: transparent !important;
  font-family: var(--font-family-mono) !important;
}

/* Dropdowns & Menus */
.dropdown-menu,
.dropdown-content,
.select-menu,
select option,
[role="menu"],
[role="listbox"],
.dropdown-item,
.select-option {
  background-color: var(--dropdown-background) !important;
  color: var(--text-color-dark) !important;
  border: 1px solid var(--border-color-light);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius-small);
}
.dropdown-item:hover,
.select-option:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border-color: var(--primary-color) !important;
}

/* Icon & Image Adjustments */
i[style="color: #000000"],
i[style*="color:#000000"],
i[style*="color: rgb(0, 0, 0)"],
i[style*="color: black"],
svg[style*="color: #000000"],
svg[style*="color:#000000"],
svg[style*="color: rgb(0, 0, 0)"],
svg[style*="color: black"] {
  color: var(--text-color-dark) !important;
  fill: var(--text-color-dark) !important;
}
img {
  filter: brightness(1);
}

/* Forms and Inputs */
input, textarea, select {
  background-color: var(--background-color-light) !important;
  border: 1px solid var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
  margin: 0px 5px 0px 10px;
  border-radius: var(--form-control-border-radius);
  box-shadow: none !important;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-color) !important;
  box-shadow: 0 0 5px rgba(76, 120, 174, 0.7);
}

/* Tables */
table, th, td {
  background-color: var(--background-color-light) !important;
  border-color: var(--border-color-light) !important;
}
th {
  font-weight: var(--font-weight-bold);
}

/* Background Overrides */
[class="bg-white"],
[class*="bg-light"] {
  background-color: var(--background-color-light) !important;
}

/* Button Styling */
button,
.btn,
.button {
  background-color: var(--background-color-gray) !important;
  color: var(--text-color-dark) !important;
  border: 1px solid var(--primary-color) !important;
  padding: var(--button-padding) !important;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition-speed) ease-in-out,
              transform var(--transition-speed) ease-in-out,
              box-shadow var(--transition-speed) ease-in-out;
}
button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color) !important;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

/* Tab Menu */
ul#tabmenu li a {
  font-size: var(--font-size-base) !important;
  padding: 8px 14px !important;
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border: 0.1px solid var(--primary-color) !important;
  border-right: 0.1px solid var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
}
ul#tabmenu li {
  padding: 3px !important;
}
ul#tabmenu li a.selected {
  background-color: rgb(33, 74, 123) !important;
}
ul#tabmenu li a:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Header and Content */
.header {
  background-color: var(--primary-color) !important;
}
.content th {
  color: var(--primary-color) !important;
}
.message-date {
  color: var(--secondary-color) !important;
}
.ibox-content {
  border-width: 0.1px !important;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.ibox-content:hover {
  box-shadow: var(--box-shadow-hover);
}

.ibox-title {
  border-width: 0.1px !important;
  background-color: transparent !important;
  border-style: none !important;
}

.header .btn-warning {
  background-color: var(--primary-color-hover) !important;
}
.header .btn-warning:hover {
  background-color: #346198 !important;
}

/* Additional Element Styling */
.c-no-item-wrapper {
  border: 0.5px solid #e7eaec;
  border-radius: var(--border-radius);
}
.c-table td a {
  font-weight: 600 !important;
}
.k-button {
  background-color: var(--primary-color) !important;
  color: #2a2a2a !important;
}
.redactor-toolbar {
  background-color: var(--primary-color) !important;
}
.redactor-toolbar li a {
  color: var(--text-color-light) !important;
}

.card {
 background-color: var(--background-color-light) !important;
 border: none !important;
}

.c-remove-text {
  padding: 8px 15px 0px 0px !important;
}
.c-icon-style {
  background-color: var(--primary-color) !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-light);
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.c-icon-style:hover {
  transform: scale(1.1);
  box-shadow: var(--box-shadow-hover);
}
.top-navigation .navbar-nav .c-dropdown-menu {
  border-color: var(--primary-color) !important;
}
.c-breadcrumb {
  background-color: var(--primary-color) !important;
}
.c-breadcrumb .breadcrumb {
  background-color: var(--primary-color) !important;
}

/* Datepicker */
.ui-datepicker .ui-datepicker-title {
  color: var(--text-color-dark) !important;
}

/* Close Button */
a.closebtn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
  color: var(--text-color-light) !important;
}
a.closebtn:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Cancel Button */
.mod_cancel {
  background-color: var(--danger-color) !important;
  border-radius: var(--border-radius);
  margin: 6px;
  color: var(--text-color-light) !important;
}
.mod_cancel:hover {
  background-color: var(--danger-color-hover) !important;
}

/* Box & Progress Bar */
.box {
  border: 0px !important;
}
.progress-bar {
  background-color: var(--progress-bar-color) !important;
}
.label-info,
.badge-info {
  background-color: var(--label-info-background) !important;
}
.popup .popuptext {
  background-color: var(--popup-background) !important;
  color: var(--text-color-light) !important;
}
.c-ibox-value span {
  background-color: var(--danger-color) !important;
  color: var(--text-color-light) !important;
}
.calendar tbody .day {
  color: var(--text-color-dark) !important;
}

/* Updated Button & Link Styles */
.button,
.btn,
.button {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color-hover) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}
.btn-info {
  color: #fff;
  background-color: var(--primary-color);
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
}
.btn-info:hover {
  background-color: var(--primary-color-hover);
}
.btn-success {
  color: #fff;
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
  padding: var(--button-padding) !important;
}

.btn-success:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

/* Miscellaneous Adjustments */
.uidisp {
  background-color: var(--primary-color) !important;
}
.delete-icon {
  color: rgb(255, 255, 255) !important;
}
.fixed-dimensions-btn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
}
.fixed-dimensions-btn:hover {
  background-color: var(--primary-color-hover) !important;
}
.pagination > li > a,
.pagination > li > span {
  border-radius: var(--border-radius);
  margin-left: 5px;
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: #346198 !important;
}
.chat-message .c-message-avatar {
  background-color: var(--chat-message-background) !important;
}
.c-dropdown-toggle {
  color: var(--text-color-dark);
}
.c-dropdown-toggle:hover {
  color: var(--primary-color-hover) !important;
}
.c-lowerlink-item {
  color: var(--text-color-dark);
}
.c-lowerlink-item:hover {
  color: var(--primary-color-hover) !important;
}

/* Form Group Input */
.c-form .form-group input,
.c-form .form-group select {
  border-radius: var(--form-control-border-radius);
  border: 1px solid var(--border-color-light);
}

/* Navbar Dropdown */
.navbar-static-top .c-dropdown-menu li a {
  font-weight: var(--font-weight-normal) !important;
  background-color: var(--navbar-static-top-background) !important;
}
.dropdown-menu > li > a {
  color: var(--text-color-dark) !important;
}
.dropdown-menu > li > a:hover {
  color: var(--text-color-light) !important;
  background-color: var(--primary-color) !important;
}

/* Updated Link Styling */
.c-link {
  color: var(--text-color-light);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background-color: var(--primary-color-hover);
  display: inline-block;
}
.c-link:hover {
  color: var(--text-color-light);
  text-decoration: none;
  background-color: #346198 !important;
  outline: 1px solid rgb(33, 74, 123) !important;
  transition: background-color 0.2s ease-in-out;
  transform: translateY(-2px);
}
.c-link-color {
  color: #2f84c6;
  text-decoration: none;
}
.c-seperator {
  color: transparent;
  padding: 0 5px;
}

/* Additional Components */
.btn-fixed-height {
  margin-top: 6px;
}
.fade-in {
  animation: fadeIn 0.4s ease-out both;
}
.header .c-seperator {
  color: transparent !important;
}
.form-inline .form-control {
  border-radius: var(--border-radius);
}
.divfilter select {
  border-radius: var(--border-radius);
}
.card-body {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
  padding: 15px !important;
  box-shadow: var(--box-shadow);
}

/* Scrollbar Styling for Webkit */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color);
  border-radius: var(--border-radius);
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color);
  border-radius: var(--border-radius);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-color);
}

/* Firefox Scrollbar Styling */
html {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
}

/* Table Border */
.table-bordered {
  border: 0.5px solid var(--border-color-light) !important;
}
.listing .active a {
  color: var(--text-color-dark) !important;
}

.message {
border-radius: var(--border-radius);
}

.navbar-expand-sm .navbar-nav {
  background-color: var(--background-color-light) !important;
  padding-bottom: 8px;
}

.bi-zoom-in::before {
  color: var(--text-color-light) !important;
}

.bi-zoom-out::before {
  color: var(--text-color-light) !important;
}

.bi-bookmark-check::before {
  color: var(--text-color-light) !important;
}

.fa-refresh:before {
  color: var(--primary-color) !important;
}

.fa-info-circle:before {
  color: var(--primary-color) !important;
}

.bi-list::before {
  color: var(--text-color-light) !important;
}

.boxhead {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}

.titletext {
  color: var(--text-color-light) !important;
}

.c-title-strip {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}

.chat-discussion {
  background: var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
}

.col-lg-12 {
  background: none !important;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
}

.top-navigation .navbar-nav .dropdown-menu {
  border: none !important;
}

.c-logo img {
  filter: brightness(1) !important;
  transition: filter 0.2s ease-in-out;
}

.c-logo img:hover {
  filter: brightness(0.8) !important;
  cursor: pointer;
}

.graph-cell {
border-radius: var(--border-radius) !important;
box-shadow: var(--box-shadow) !important;
}
`;

// Light Dark Mode (your tuned version)
const lightDarkCSS = `
  /* Base styles */
/* Updated Awesome UI Styles */

/* Base styles */
:root {
  /* Colors */
  --primary-color: #292929;
  --primary-color-hover: #353535;
  --secondary-color: #424242;
  --secondary-color-hover: #2a2a2a;
  --text-color-dark: #333333; /* Light text for dark UI */
  --text-color-light: #f8f8f8; /* Off-white for contrast */
  --text-color-muted: #666666; /* Muted text */
  --message-date-color: #a0a0a0;
  --icon-background-color: #afafaf;
  --text-color-dark-violet: #7a80dd;

  /* Backgrounds */
  --background-color-light: #ebebeb; /* Main background */
  --background-color-dark: #292929; /* Darker elements */
  --background-color-darker: #0f0f0f;
  --background-color-dark-alt: #292929;
  --background-color-gray: #353535;
  --background-color-gray-hover: #404040;
  --dropdown-background: transparent;

  /* Borders & Shadows */
  --border-color-light: #cccccc; /* Lighter borders */
  --border-color-dark: #333333;
  --border-radius: 15px;
  --border-radius-small: 15px; /* For small elements like pagination */
  --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --box-shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* Spacing & Transitions */
  --button-padding: 4px 13px; /* Slightly more padding for buttons */
  --transition-speed: 0.2s; /* Consistent transition speed */

  /* Fonts */
  --font-family-sans: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --font-weight-bold: 600;

  /* Success & Danger */
  --success-color: #28a745;
  --success-background: #d4edda;
  --danger-color: #dc3545;
  --danger-color-hover: #c82333;
  --progress-bar-color: #28a745;
  --label-info-background: #17a2b8;
  --popup-background: #292929;
  --chat-message-background: #353535;
  --form-control-border-radius: var(--border-radius-small);
  --navbar-static-top-background: #ffffff;

  /* Scrollbar */
  --scrollbar-track-color: #f1f1f1;
  --scrollbar-thumb-color: #888;
  --scrollbar-thumb-hover-color: #555;

  /* Additional Modern Enhancements */
  --card-padding: 2rem;
  --card-margin-bottom: 2rem;
  --input-bg: #f9fafb;
  --input-focus-shadow: rgba(76, 120, 174, 0.09);
}

/* Global Settings */
html {
  color-scheme: light !important;
  scroll-behavior: smooth;
}
body {
  background-color: var(--background-color-light) !important;
  font-family: var(--font-family-sans) !important;
  font-size: var(--font-size-base) !important;
  line-height: 1.5;
  color: var(--text-color-dark) !important;
  animation: fadeIn 0.4s ease-out both;
}

/* Global Transitions */
*, *::before, *::after {
  transition: background-color var(--transition-speed) ease-in-out,
              border-color var(--transition-speed) ease-in-out,
              box-shadow var(--transition-speed) ease-in-out,
              transform var(--transition-speed) ease-in-out;
}

/* Fade-in Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Headings */
h1, .heading h1 {
  color: var(--text-color-dark) !important;
  font-weight: var(--font-weight-bold);
}

/* Pagination */
.pagination > li > a,
.pagination > li > span {
  background-color: transparent !important;
  border: 1px solid var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
  border-radius: var(--border-radius-small);
  margin-left: 4px;
  padding: 4px 8px;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border-color: var(--primary-color) !important;
}

/* Breadcrumbs & Navigation */
.breadcrumbs,
.breadcrumb,
.breadcrumb-item,
nav[aria-label="breadcrumb"] {
  background-color: transparent !important;
}

/* UTC/Login Display */
[data-content="Current Date and Time (UTC"]::before,
[data-content*="Current User's Login:"]::before,
.datetime-display,
.user-login-display {
  color: var(--secondary-color) !important;
  background-color: transparent !important;
  font-family: var(--font-family-mono) !important;
}

/* Dropdowns & Menus */
.dropdown-menu,
.dropdown-content,
.select-menu,
select option,
[role="menu"],
[role="listbox"],
.dropdown-item,
.select-option {
  background-color: var(--background-color-light) !important;
  color: var(--text-color-dark) !important;
  border: 1px solid var(--border-color-light);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius-small);
}
.dropdown-item:hover,
.select-option:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  border-color: var(--primary-color) !important;
}

/* Icon & Image Adjustments */
i[style="color: #000000"],
i[style*="color:#000000"],
i[style*="color: rgb(0, 0, 0)"],
i[style*="color: black"],
svg[style*="color: #000000"],
svg[style*="color:#000000"],
svg[style*="color: rgb(0, 0, 0)"],
svg[style*="color: black"] {
  color: var(--text-color-dark) !important;
  fill: var(--text-color-dark) !important;
}
img {
  filter: brightness(1);
}

/* Forms and Inputs */
input, textarea, select {
  background-color: var(--background-color-light) !important;
  border: 1px solid var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
  margin: 0px 5px 0px 10px;
  border-radius: var(--form-control-border-radius);
  box-shadow: none !important;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-color) !important;
  box-shadow: 0 0 5px rgba(76, 120, 174, 0.7);
}

/* Tables */
table, th, td {
  background-color: var(--background-color-light) !important;
  border-color: var(--border-color-light) !important;
}
th {
  font-weight: var(--font-weight-bold);
}

/* Background Overrides */
[class="bg-white"],
[class*="bg-light"] {
  background-color: var(--background-color-light) !important;
}

/* Button Styling */
button,
.btn,
.button {
  background-color: var(--background-color-gray) !important;
  color: var(--text-color-dark) !important;
  border: 1px solid var(--primary-color) !important;
  padding: var(--button-padding) !important;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition-speed) ease-in-out,
              transform var(--transition-speed) ease-in-out,
              box-shadow var(--transition-speed) ease-in-out;
}
button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color) !important;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

/* Tab Menu */
ul#tabmenu li a {
  font-size: var(--font-size-base) !important;
  padding: 8px 14px !important;
  background-color: var(--secondary-color) !important;
  color: var(--text-color-light) !important;
  border: 0.1px solid var(--secondary-color) !important;
  border-right: 0.1px solid var(--secondary-color) !important;
  border-radius: var(--border-radius) !important;
}
ul#tabmenu li {
  padding: 3px !important;
}
ul#tabmenu li a.selected {
  background-color: var(--background-color-darker) !important;
}
ul#tabmenu li a:hover {
  background-color: var(--background-color-dark-alt) !important;
}

/* Header and Content */
.header {
  background-color: var(--primary-color) !important;
}
.content th {
  color: var(--primary-color) !important;
}
.message-date {
  color: var(--secondary-color) !important;
}
.ibox-content {
  border-width: 0.1px !important;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.ibox-content:hover {
  box-shadow: var(--box-shadow-hover);
}

.ibox-title {
  border-width: 0.1px !important;
  background-color: transparent !important;
  border-style: none !important;
}

.header .btn-warning {
  background-color: var(--secondary-color) !important;
}
.header .btn-warning:hover {
  background-color: var(--secondary-color-hover) !important;
  text-decoration: none;
  outline: 1px solid var(--text-color-light) !important;
  transition: background-color 0.2s ease-in-out;
  transform: translateY(-2px);
}

/* Additional Element Styling */
.c-no-item-wrapper {
  border: 0.5px solid #e7eaec;
  border-radius: var(--border-radius);
}
.c-table td a {
  font-weight: 700 !important;
  color: var(--text-color-dark-violet) !important;
}
.k-button {
  background-color: var(--primary-color) !important;
  color: #2a2a2a !important;
}
.redactor-toolbar {
  background-color: var(--primary-color) !important;
}
.redactor-toolbar li a {
  color: var(--text-color-light) !important;
}
.c-remove-text {
  padding: 8px 15px 0px 0px !important;
}
.c-icon-style {
  background-color: var(--icon-background-color) !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-light);
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.c-icon-style:hover {
  transform: scale(1.1);
  box-shadow: var(--box-shadow-hover);
}
.top-navigation .navbar-nav .c-dropdown-menu {
  border-color: var(--primary-color) !important;
  background: var(--background-color-light) !important;
}
.c-breadcrumb {
  background-color: var(--primary-color) !important;
}
.c-breadcrumb .breadcrumb {
  background-color: var(--primary-color) !important;
}

/* Datepicker */
.ui-datepicker .ui-datepicker-title {
  color: var(--text-color-dark) !important;
}

/* Close Button */
a.closebtn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
  color: var(--text-color-light) !important;
}
a.closebtn:hover {
  background-color: var(--text-color-dark-violet) !important;
}

/* Cancel Button */
.mod_cancel {
  background-color: var(--danger-color) !important;
  border-radius: var(--border-radius);
  margin: 6px;
  color: var(--text-color-light) !important;
}
.mod_cancel:hover {
  background-color: var(--danger-color-hover) !important;
}

/* Box & Progress Bar */
.box {
  border: 0px !important;
}
.progress-bar {
  background-color: var(--progress-bar-color) !important;
}
.label-info,
.badge-info {
  background-color: var(--label-info-background) !important;
}
.popup .popuptext {
  background-color: var(--popup-background) !important;
  color: var(--text-color-light) !important;
}
.c-ibox-value span {
  background-color: var(--danger-color) !important;
  color: var(--text-color-light) !important;
}
.calendar tbody .day {
  color: var(--text-color-dark) !important;
}

/* Updated Button & Link Styles */
.button,
.btn,
.button {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color-hover) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  transform: translateY(-2px);
  outline: 1px solid var(--text-color-light) !important;
}
.btn-info {
  color: #fff;
  background-color: var(--primary-color);
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
}
.btn-info:hover {
  background-color: var(--primary-color-hover);
}
.btn-success {
  color: #fff;
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
  padding: var(--button-padding) !important;
}

.btn-success:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

/* Miscellaneous Adjustments */
.uidisp {
  background-color: var(--primary-color) !important;
}
.delete-icon {
  color: rgb(255, 255, 255) !important;
}
.fixed-dimensions-btn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
}
.fixed-dimensions-btn:hover {
  background-color: var(--primary-color-hover) !important;
}
.pagination > li > a,
.pagination > li > span {
  border-radius: var(--border-radius);
  margin-left: 5px;
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: var(--secondary-color) !important;
  color: var(--text-color-light) !important;
  outline: 1px solid var(--text-color-light) !important;
  transition: background-color 0.2s ease-in-out;
  transform: translateY(-2px);
}
.chat-message .c-message-avatar {
  background-color: var(--chat-message-background) !important;
}
.c-dropdown-toggle {
  color: var(--text-color-dark);
}
.c-dropdown-toggle:hover {
  color: var(--text-color-muted) !important;
}
.c-lowerlink-item {
  color: var(--text-color-dark);
}
.c-lowerlink-item:hover {
  color: var(--text-color-muted) !important;
}

/* Form Group Input */
.c-form .form-group input,
.c-form .form-group select {
  border-radius: var(--form-control-border-radius);
  border: 1px solid var(--border-color-light);
}

/* Navbar Dropdown */
.navbar-static-top .c-dropdown-menu li a {
  font-weight: var(--font-weight-normal) !important;
  background-color: var(--background-color-light) !important;
}
.dropdown-menu > li > a {
  color: var(--text-color-dark) !important;
}
.dropdown-menu > li > a:hover {
  color: var(--text-color-light) !important;
  background-color: var(--primary-color) !important;
}

/* Updated Link Styling */
.c-link {
  color: var(--text-color-light);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background-color: var(--secondary-color);
  display: inline-block;
}
.c-link:hover {
  color: var(--text-color-light);
  text-decoration: none;
  background-color: var(--secondary-color-hover) !important;
  outline: 1px solid var(--text-color-light) !important;
  transition: background-color 0.2s ease-in-out;
  transform: translateY(-2px);
}
.c-link-color {
  color: var(--text-color-dark)!important;
  text-decoration: none;
}
.c-seperator {
  color: transparent;
  padding: 0 5px;
}

/* Additional Components */
.btn-fixed-height {
  margin-top: 6px;
}
.fade-in {
  animation: fadeIn 0.4s ease-out both;
}
.header .c-seperator {
  color: transparent !important;
}
.form-inline .form-control {
  border-radius: var(--border-radius);
}
.divfilter select {
  border-radius: var(--border-radius);
}

.card {
 background-color: var(--background-color-light) !important;
 border: none !important;
}

.card-body {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
  padding: 15px !important;
  box-shadow: var(--box-shadow);
}

/* Scrollbar Styling for Webkit */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color);
  border-radius: var(--border-radius);
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color);
  border-radius: var(--border-radius);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-color);
}

/* Firefox Scrollbar Styling */
html {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
}

/* Table Border */
.table-bordered {
  border: 0.5px solid var(--border-color-light) !important;
}
.listing .active a {
  color: var(--text-color-dark) !important;
}

.message {
border-radius: var(--border-radius);
}

.c-breadcrumb .breadcrumb-item a {
  color: var(--text-color-light) !important;
  text-decoration: none;
}

.bi-zoom-in::before {
  color: var(--text-color-light) !important;
}

.bi-zoom-out::before {
  color: var(--text-color-light) !important;
}

.bi-bookmark-check::before {
  color: var(--text-color-light) !important;
}

.fa-refresh:before {
  color: var(--primary-color) !important;
}

.fa-info-circle:before {
  color: var(--primary-color) !important;
}

.bi-list::before {
  color: var(--text-color-light) !important;
}

.navbar-expand-sm .navbar-nav {
  background-color: var(--background-color-light) !important;
  padding-bottom: 8px;
}

.c-dropdown-left {
  background-color: var(--background-color-light) !important;
  color: var(--text-color-dark) !important;
}

.c-dropdown-right {
  background-color: var(--background-color-light) !important;
  color: var(--text-color-dark) !important;
}

.boxhead {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}

.titletext {
  color: var(--text-color-light) !important;
}

.c-title-strip {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}

.chat-discussion {
  background: var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
}

.col-lg-12 {
  background: none !important;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
}

.top-navigation .navbar-nav .dropdown-menu {
  border: none !important;
}

.c-logo img {
  filter: brightness(1) !important;
  transition: filter 0.2s ease-in-out;
}

.c-logo img:hover {
  filter: brightness(0.8) !important;
  cursor: pointer;
}

.graph-cell {
border-radius: var(--border-radius) !important;
box-shadow: var(--box-shadow) !important;
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
  
  // Wait for document.body to be available
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
  } else {
    // If body is not available, wait for it to load
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
    });
  }
}

// Function to apply sepia filter
function applySepiaFilter(intensity) {
  const sepiaValue = intensity / 100;
  document.documentElement.style.filter = `sepia(${sepiaValue})`;
}

// Update the applyTheme function to handle sepia
// Store original favicon URL
let originalFavicon = null;

// Function to change the website favicon
function changeFavicon(iconPath) {
  // Find any existing favicons
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  
  // Store the original favicon if not already stored
  if (!originalFavicon && existingFavicons.length > 0) {
    originalFavicon = existingFavicons[0].href;
  }
  
  // Remove any existing favicons
  existingFavicons.forEach(favicon => {
    favicon.remove();
  });

  // Create new favicon link
  const newFavicon = document.createElement('link');
  newFavicon.rel = 'shortcut icon';
  newFavicon.type = 'image/png';
  newFavicon.href = iconPath;
  document.head.appendChild(newFavicon);
}

// Function to restore the original favicon
function restoreOriginalFavicon() {
  if (originalFavicon) {
    changeFavicon(originalFavicon);
  }
}

function applyTheme(mode) {
  // Remove any existing theme styles
  removeCurrentTheme();

  if (mode === "dark") {
    themeStyleElement = document.createElement("style");
    themeStyleElement.id = "extension-dark-theme";
    themeStyleElement.textContent = darkModeCSS;
    document.documentElement.appendChild(themeStyleElement);
    setupObserver();
    
    // Change favicon to dark mode icon using the extension's icon
    changeFavicon(chrome.runtime.getURL("icons/favicon.png"));
  } else if (mode === "light-new") {
    themeStyleElement = document.createElement("style");
    themeStyleElement.id = "extension-light-new-theme";
    themeStyleElement.textContent = lightNewCSS;
    document.documentElement.appendChild(themeStyleElement);
    setupObserver();
    
    // Change favicon to light-new mode icon using the extension's icon
    changeFavicon(chrome.runtime.getURL("icons/favicon.png"));
  } else if (mode === "light-dark") {
    themeStyleElement = document.createElement("style");
    themeStyleElement.id = "extension-light-dark-theme";
    themeStyleElement.textContent = lightDarkCSS;
    document.documentElement.appendChild(themeStyleElement);
    setupObserver();
    
    // Change favicon for light-dark mode
    changeFavicon(chrome.runtime.getURL("icons/favicon.png"));
  } else {
    // Light mode (default) - remove all custom styles
    // document.documentElement.style.filter = '';
    
    // Restore original favicon
    restoreOriginalFavicon();
  }
  
  activeTheme = mode;
  showPage();

  // Restore sepia filter if it was set
  chrome.storage.local.get(['sepiaIntensity'], (result) => {
    if (result.sepiaIntensity) {
      applySepiaFilter(parseInt(result.sepiaIntensity));
    }
  });
}

// Update message listener to handle sepia
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'setTheme') {
    applyTheme(message.mode);
    if (message.sepiaIntensity !== undefined) {
      applySepiaFilter(message.sepiaIntensity);
    }
    sendResponse({ success: true });
  }
  return true;
});

// Add click handler for .c-logo images
function addLogoClickHandler() {
  const logoImages = document.querySelectorAll('.c-logo img');
  logoImages.forEach(img => {
    if (!img.hasAttribute('data-click-handler')) {
      img.style.cursor = 'pointer';
      img.setAttribute('data-click-handler', 'true');
      img.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'http://mgntproject.com/pm/';
      });
    }
  });
}

// Initial run
addLogoClickHandler();

// Function to modify logo and add click handler
function modifyLogo() {
  const logoImages = document.querySelectorAll('.c-logo img');
  logoImages.forEach(img => {
    // Change the image source to the extension's logo
    const logoURL = chrome.runtime.getURL('icons/logo2.png');
    if (img.src !== logoURL) {
      img.src = logoURL;
    }
    
    // Add click functionality if not already added
    if (!img.hasAttribute('data-click-handler')) {
      img.style.cursor = 'pointer';
      img.setAttribute('data-click-handler', 'true');
      img.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'http://mgntproject.com/pm/';
      });
    }
  });
}

// Run immediately
modifyLogo();

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', modifyLogo);

// Watch for dynamic changes
const logoObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length || mutation.type === 'attributes') {
      modifyLogo();
    }
  });
});

// Start observing when document.body is available
if (document.body) {
  logoObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src']
  });
} else {
  // If body is not available, wait for it to load
  document.addEventListener('DOMContentLoaded', () => {
    logoObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src']
    });
  });
}