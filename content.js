// ---------------------------
// Theme CSS Definitions
// ---------------------------

// Dark Mode CSS (your tuned version)
const darkModeCSS = `
  :root {
  --primary-color: #3679c8; /* Lighter blue for dark mode */
  --primary-color-hover: #214a7b;  /* Even lighter on hover */
  --secondary-color: #295d9a; /* Lighter secondary */
  --message-date-color: #326fb9; /* Lighter date color */
  --text-color-dark: #f0f0f0; /* Very light text (almost white) */
  --text-color-light: #ffffff; /* Pure white for contrast */
  --text-color-muted: #aaaaaa;  /* Lighter muted text */
  --background-color-dark: #252526; /* Darker background */
  --background-color-darker: #0a0a0a; /* Even darker, almost black */
  --background-color-dark-alt: #252526;  /* Slightly lighter than background-color-dark */
  --background-color-gray: #333333; /* for buttons (slightly lighter)*/
  --background-color-gray-hover: #444444; /* Hover state for gray elements*/
  --border-color-light: #444444; /* Darker border, but still visible */
  --border-color-dark: #666666;  /* For inputs, slightly lighter than border-color-light */
  --border-color-table: #444444;  /* Darker table borders */
  --button-padding: 4px 13px;
  --border-radius: 15px;
  --border-radius-small: 15px;
  --font-family-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;
  --font-size-base: 1rem;
  --success-color: #5cb85c; /* Lighter green */
  --success-background: #222222; /* Darker success background */
  --danger-color: #d9534f;  /* Lighter red */
  --danger-color-hover: #e0736f; /* Lighter red on hover*/
  --progress-bar-color: #5cb85c; /* Lighter green */
  --label-info-background: #42a5bb; /* Lighter info */
  --popup-background: #326fb9;  /* Lighter popup */
  --dropdown-background: #222222; /* Darker dropdown */
  --form-control-border-radius: 15px; /* Smaller radius */
  --form-control-height: 2.5rem;
  --chat-message-background: #326fb9; /* Lighter chat background*/
  --breadcrumb-link-color: #326fb9; /* Lighter blue */
    --k-button-text-color:#252526 ;
  --navbar-static-top-background: var(--background-color-dark-alt); /* Use the alt dark background */
  --box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1); /* Subtle *white* shadow */
  --box-shadow-hover: 0 4px 8px rgba(255, 255, 255, 0.2); /* Stronger white shadow */
  --transition-speed: 0.2s;
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
                color var(--transition-speed) ease-in-out,
                border-color var(--transition-speed) ease-in-out,
                box-shadow var(--transition-speed) ease-in-out,
                transform var(--transition-speed) ease-in-out;
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
  background-color: var(--background-color-dark) !important;
}

/* Remove white background from .heading */
.heading {
  background-color: transparent !important;
}

/* Make h1 white */
h1, .heading h1 {
  color: var(--text-color-light) !important;
}

/* Pagination */
.pagination > li > a,
.pagination > li > span {
  background-color: transparent !important;
  border-color: var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
    border-radius: var(--border-radius-small);  /* Smaller radius */
    margin-left: 4px; /* Reduce margin for tighter spacing */
    padding: 4px 8px; /* Adjust padding */
}
.pagination > li > a:hover,
.pagination > li > span:hover {
    background-color: var(--primary-color) !important; /* Highlight on hover */
    color: var(--text-color-light) !important; /* White text on hover */
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

/* Enhanced dropdown styles */
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
    border-radius: var(--border-radius-small); /*Smaller radius*/
}

.dropdown-item:hover,
.select-option:hover {
  background-color: var(--primary-color) !important; /* Highlight on hover */
  color: var(--text-color-light) !important; /* White text on hover */
  border-color: var(--primary-color) !important;
  box-shadow: var(--box-shadow-hover);
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
  color: var(--background-color-darker) !important; /* Use a darker background variable */
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
  color: var(--text-color-light) !important;
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
  color: var(--text-color-light) !important;
  fill: var(--text-color-light) !important;
}

/* Forms and inputs */
input, textarea, select {
  background-color: var(--background-color-dark) !important;
  border-color: var(--border-color-dark) !important;
  color: var(--text-color-light) !important;
  margin: 0px 5px 0px 10px;
  border-radius: var(--form-control-border-radius);
    box-shadow: var(--box-shadow);
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 5px rgba(76, 120, 174, 0.7); /* Focus glow */
}

/* Tables */
table, th, td {
  background-color: var(--background-color-dark) !important;
  border-color: var(--border-color-light) !important;
}

th {
    font-weight: var(--font-weight-bold); /* Bolder table headers */
}

/* Override white backgrounds */
[class*="bg-white"],
[class*="bg-light"] {
  background-color: var(--background-color-dark) !important;
}

/* Preserve images */
img {
  filter: brightness(0.9);
}

/* Improved button styling */
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
  transition: background-color var(--transition-speed) ease-in-out, transform var(--transition-speed) ease-in-out, box-shadow var (--transition-speed) ease-in-out; /* Added box-shadow */
  // transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}
button:hover,
.btn:hover,
.button:hover {
  background-color: var(--primary-color) !important;
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-hover);
}

/* Tabmenu styles */
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
  background-color: var(--primary-color-hover) !important;  /* Specific, keep as is */
}

ul#tabmenu li a:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Header and content */
.header {
  background-color: var(--background-color-dark) !important;
}

.content th {
  color: var(--primary-color) !important;
}

.message-date {
  color: var(--message-date-color) !important;
}

.ibox-content {
  border-width: 0.4px !important;
  border-radius: var(--border-radius);
    box-shadow: var(--box-shadow); /* Add shadow */
}

.header .btn-warning {
  background-color: var(--primary-color) !important;
}

.header .btn-warning:hover {
  background-color: var(--primary-color-hover) !important;
}

.c-no-item-wrapper {
  border: 0.5px solid #e7eaec;  /* Specific, keep as is */
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
}

.top-navigation .navbar-nav .c-dropdown-menu {
  border-color: var(--primary-color) !important;
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

/* Alert styles */
.alert-success {
  color: var(--success-color) !important;
  background-color: var(--success-background) !important;
  border-color: var(--success-color); /* Add border color */
  border-radius: var(--border-radius-small); /* Smaller radius */
}

/* Datepicker */
.ui-datepicker .ui-datepicker-title {
  color: var(--text-color-light) !important;
}

/* Close button */
a.closebtn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
  color: var(--text-color-light) !important;
}
a.closebtn:hover {
   background-color: #335f95 !important; /* specific color*/
}

.mod_cancel {
  background-color: var(--danger-color) !important;
  border-radius: var(--border-radius);
  margin: 6px;
}
.mod_cancel:hover {
  background-color: var(--danger-color-hover) !important;
}

.progress-bar {
  background-color: var(--progress-bar-color) !important;
}

.label-info, .badge-info {
  background-color: var(--label-info-background) !important;
}

.box {
  border: 0px !important;
}

.popup .popuptext {
  background-color: var(--popup-background) !important;
  color: var(--text-color-light) !important;
}

.c-ibox-value span {
  background-color: var(--danger-color) !important;
}

.calendar tbody .day {
  color: var(--text-color-light) !important;
}

/* Button variations */
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
  color: #fff;  /* Specific, keep */
  background-color: var(--primary-color);
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
}
.btn-info:hover {
  background-color: var(--primary-color-hover);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.btn-success {
  color: #fff; /* specific, keep*/
  background-color: #1c84c6;  /* specific, keep*/
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
  padding: var(--button-padding) !important;
}

.uidisp {
  background-color: var(--primary-color) !important;
}

.delete-icon {
  color: rgb(255, 255, 255) !important;  /* Specific, keep for contrast */
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
  color: var(--text-color-light) !important; /* Added for consistency */
}
.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: var(--primary-color-hover) !important;
}

/* Lower link and dropdown styles */
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

/* Table text */
.table {
  color: var(--text-color-light);
}
.c-no-item {
  color: var(--text-color-light);
}
.table > tfoot > tr > th {
  color: var(--text-color-light) !important;
}

/* Anchor links */
a {
  color: var(--text-color-light);
}

/* Calendar styles */
.calendar thead .title {
  color: var(--text-color-light) !important;
}
.calendar thead .name {
  color: var(--text-color-light) !important;
}
.calendar tfoot .ttip {
  color: var(--text-color-light) !important;
}

/* Ibox label */
.c-ibox-label {
  color: var(--text-color-light) !important;
}

/* Panel heading */
.panel-default > .panel-heading {
  color: var(--text-color-light) !important;
}

/* Form select height */
select.form-control:not([size]):not([multiple]) {
  height: var(--form-control-height);
}

/* Chat message avatar */
.chat-message .c-message-avatar {
  background-color: var(--chat-message-background) !important;
}

/* Form inputs in specialized form styles */
.c-form .form-group input,
.c-form .form-group select {
  border-radius: var(--form-control-border-radius);
  border: 1px solid var(--border-color-light); /* Lighter border */
}

/* Navbar dropdown menu */
.navbar-static-top .c-dropdown-menu li a {
  font-weight: var(--font-weight-normal) !important; /* Use variable */
  background-color: var(--navbar-static-top-background) !important;
}

/* Dropdown menu links */
.dropdown-menu > li > a {
  color: var(--text-color-light) !important;
}
.dropdown-menu > li > a:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}

/* Specific element overrides */
#leftMenu {
  color: var(--text-color-light) !important;
}
#leftMenu:hover {
   color: var(--primary-color) !important;  /* Changed to primary for hover */
}

#favoriteBtn {
  color: var(--text-color-light) !important;
}
#favoriteBtn:hover {
  color: var(--primary-color) !important;  /* Changed to primary for hover */
}

/* Link styling */
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
  background-color: var(--primary-color-hover); !important;
}
.c-link-color {
  color: var(--primary-color) !important;
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
  color: var(--text-color-light) !important;
}

/* Utility class for fade-in animation */
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

.table-bordered {
  border: 0.5px solid var(--border-color-table) !important;
}

.card-body {
   background-color: var(--primary-color) !important;
   border-radius: var(--border-radius) !important;
    padding: 15px !important;
   box-shadow: var(--box-shadow) !important;
}

/* Scrollbar Styling (Webkit - Chrome, Safari) */
::-webkit-scrollbar {
    width: 10px;  /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
    background: var(--scrollbar-track-color); /* Track color */
	border-radius: var(--border-radius);
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color); /* Handle color */
    border-radius: var(--border-radius); /* Rounded corners */
}

::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover-color); /* Handle color on hover */
}


/* Firefox Scrollbar Styling */
html {
    scrollbar-width: thin;  /* "auto" or "thin" */
    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color); /* thumb and track */
}

.table-bordered {
	border: 0.5px solid var(--border-color-light) !important;
}

/* Form Group */
.c-form .form-group input, .c-form .form-group select {
  border-radius: var(--form-control-border-radius) !important;
  border: 1px solid var(--border-color-light); /* Lighter border */
}
  
`;

// Light Mode CSS (your tuned version)
const lightNewCSS = `
  /* Base styles */
:root {
  --primary-color: #4c78ae;
  --primary-color-hover: #6aa5ed;
  --secondary-color: #3d79b3;
  --text-color-dark: #333333; /* Darker text for better readability */
  --text-color-light: #f8f8f8; /* Off-white for light theme */
  --text-color-muted: #777777; /* For less important text */
  // --background-color-light: #f5f5f5; /* Light gray background */
  --background-color-light: #f1f5f9; /* Dropdown menu bg color */
  --background-color-dark: #2d2d2d;
  --background-color-gray: #e0e0e0;
  --background-color-gray-hover: #c0c0c0;
  --dropdown-background: #ffffff; /* White dropdowns */
  --border-color-light: #cccccc; /* Lighter borders */
  --border-color-dark: #333333;
  --button-padding: 4px 13px; /* Slightly more padding */
  --border-radius: 15px; /* Smaller border-radius */
  --border-radius-small: 15px; /* For small elements like pagination */
  --font-family-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* More modern font */
  --font-family-mono: 'Courier New', Courier, monospace;
  --font-size-base: 1rem; /* Slightly larger base font size */
  --font-weight-normal: 400;
  --font-weight-bold: 600;
  --success-color: #28a745; /* Bootstrap success green */
  --success-background: #d4edda; /* Bootstrap success background */
  --danger-color: #dc3545; /* Bootstrap danger red */
  --danger-color-hover: #c82333; /* Bootstrap danger hover */
  --progress-bar-color: #28a745; /* Use success color */
  --label-info-background: #17a2b8; /* Bootstrap info color */
  --popup-background: #4c78ae;
  --chat-message-background: #4c78ae;
  --form-control-border-radius: var(--border-radius-small); /* Smaller radius */
  --navbar-static-top-background: #ffffff;
  --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  --box-shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  --transition-speed: 0.2s; /* Consistent transition speed */
	--scrollbar-track-color: #f1f1f1;
	--scrollbar-thumb-color: #888;
	--scrollbar-thumb-hover-color: #555;
}

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
                color var(--transition-speed) ease-in-out,
                border-color var(--transition-speed) ease-in-out,
                box-shadow var(--transition-speed) ease-in-out,
                transform var(--transition-speed) ease-in-out;
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

/* Headings */
h1, .heading h1 {
  color: var(--text-color-dark) !important;
  font-weight: var(--font-weight-bold);
}

/* Pagination */
.pagination > li > a,
.pagination > li > span {
  background-color: transparent !important;
  border-color: var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
    border-radius: var(--border-radius-small);  /* Smaller radius */
    margin-left: 4px; /* Reduce margin for tighter spacing */
    padding: 4px 8px; /* Adjust padding */
}
.pagination > li > a:hover,
.pagination > li > span:hover {
    background-color: var(--primary-color) !important; /* Highlight on hover */
    color: var(--text-color-light) !important; /* White text on hover */
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

/* Enhanced dropdown styles */
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
    border-radius: var(--border-radius-small); /*Smaller radius*/
}
.dropdown-item:hover,
.select-option:hover{
	background-color: var(--primary-color) !important; /* Highlight on hover */
    color: var(--text-color-light) !important; /* White text on hover */
    border-color: var(--primary-color) !important;
}

/* Preserve custom colors - No change needed, handled by variables now */
[style*="color: rgb(202, 218, 231)"],
[style*="color: #555555"],
[style*="color:#555555"] {
  /* Leave intact */
}

/* Convert light colors to darker shades */
[style*="color: #e5e7e9"],
[style*="color:#e5e7e9"],
[style*="color: rgb(229, 231, 233)"] {
  color: var(--background-color-dark) !important;
}

/* Adjust text colors for readability - Simplified using variables */
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
  color: var(--text-color-dark) !important;
}

/* Icon Color Handling */
i[style*="color: #000000"],
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

/* Forms and Inputs */
input, textarea, select {
  background-color: var(--background-color-light) !important;
  border-color: var(--border-color-light) !important;
  color: var(--text-color-dark) !important;
  margin: 0px 5px 0px 10px;
  border-radius: var(--form-control-border-radius);
    box-shadow: var(--box-shadow);
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 5px rgba(76, 120, 174, 0.7); /* Focus glow */
}

/* Tables */
table, th, td {
  background-color: var(--background-color-light) !important;
  border-color: var(--border-color-light) !important;
}

th {
    font-weight: var(--font-weight-bold); /* Bolder table headers */
}

/* Override light backgrounds */
[class*="bg-white"],
[class*="bg-light"] {
  background-color: var(--background-color-light) !important;
}

/* Preserve images */
img {
  filter: brightness(1);
}

/* Button Styling */
button,
.btn,
.button {
  background-color: var(--background-color-gray) !important;
  color: var(--text-color-dark) !important;
  border: 1px solid var(--primary-color) !important;
  padding: var(--button-padding) !important;
  border-radius: var(--border-radius); /* Use variable */
  font-size: var(--font-size-base);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition-speed) ease-in-out, transform var(--transition-speed) ease-in-out, box-shadow var (--transition-speed) ease-in-out; /* Added box-shadow */
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
  border-width: 0.4px !important;
  border-radius: var(--border-radius); /* Add border-radius */
    box-shadow: var(--box-shadow); /* Add shadow */
}
.header .btn-warning {
  background-color: var(--primary-color-hover) !important;
}
.header .btn-warning:hover {
  background-color: #346198 !important;
}

.c-no-item-wrapper {
  border: 0.5px solid #e7eaec; /* kept as specific color */
  border-radius: var(--border-radius);
}
.c-table td a {
  font-weight: 600 !important;
}
.k-button {
  background-color: var(--primary-color) !important;
  color: #2a2a2a !important; /* kept as specific color */
}
.redactor-toolbar {
  background-color: var(--primary-color) !important;
}
.redactor-toolbar li a {
  color: var(--text-color-light) !important;
}
.navbar-expand-sm .navbar-nav {
  /* background-color: var(--primary-color) !important; */
  /* padding-bottom: 8px; */
}
.c-remove-text {
  padding: 8px 15px 0px 0px !important;
}
.c-icon-style {
  background-color: var(--primary-color) !important;
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

/* Alerts */
.alert-success {
  color: var(--success-color) !important;
  background-color: var(--success-background) !important;
    border-color: var(--success-color); /* Add border color */
    border-radius: var(--border-radius-small); /* Smaller radius */
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

.box {
  border: 0px !important;
}
.progress-bar {
  background-color: var(--progress-bar-color) !important;
}
.label-info, .badge-info {
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

/* Buttons - reusing variables */
.button, .btn, .button {
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.button:hover, .btn:hover, .button:hover {
  background-color: var(--primary-color-hover) !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}
.btn-info {
  color: #fff; /* kept as specific color*/
  background-color: var(--primary-color);
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
}
.btn-info:hover {
  background-color: var(--primary-color-hover);
}
.btn-success {
  color: #fff; /* kept as specific color */
  background-color: #1c84c6; /* kept as specific color */
  border-color: var(--primary-color-hover);
  border-radius: var(--border-radius);
  padding: var(--button-padding) !important;
}

.uidisp {
  background-color: var(--primary-color) !important;
}
.delete-icon {
  color: rgb(255, 255, 255) !important;  /* kept specific for contrast */
}
.fixed-dimensions-btn {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius);
}
.fixed-dimensions-btn:hover {
  background-color: var(--primary-color-hover) !important;
}
.pagination > li > a, .pagination > li > span {
  border-radius: var(--border-radius);
  margin-left: 5px;
  background-color: var(--primary-color) !important;
  color: var(--text-color-light) !important;
}
.pagination > li > a, .pagination > li > span:hover {
  background-color: #346198 !important; /* kept as specific color */
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
/* .c-dropdown-toggle:selected{
  // color:#ff0000 !important;
}
*/
.c-lowerlink-item {
  color: var(--text-color-dark);
}
.c-lowerlink-item:hover {
  color: var(--primary-color-hover) !important;
}

/* Form Group */
.c-form .form-group input, .c-form .form-group select {
  border-radius: var(--form-control-border-radius);
  border: 1px solid var(--border-color-light); /* Lighter border */
}

/* Navbar Dropdown */
.navbar-static-top .c-dropdown-menu li a {
  font-weight: var(--font-weight-normal) !important; /* Use variable */
  background-color: var(--navbar-static-top-background) !important;
}
.dropdown-menu > li > a {
  color: var(--text-color-dark) !important;
}
.dropdown-menu>li>a:hover {
  color: var(--text-color-light) !important; /* Light text on hover */
    background-color: var(--primary-color) !important;
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
  color: var(--text-color-light) !important;
}
#leftMenu:hover {
  color: var(--text-color-dark) !important;
}
#favoriteBtn {
  color: var(--text-color-light) !important;
}
#favoriteBtn:hover {
  color: var(--text-color-dark) !important;
}

/* Updated .c-link styling with smooth transitions and responsive adjustments */
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
  background-color: #346198; /* kept as specific color */
}

.c-link-color {
  color: #2f84c6; /* kept as specific color */
  text-decoration: none;
}

.c-seperator {
  color: transparent;
  padding: 0 5px;
}

.btn-fixed-height {
  margin-top: 6px;
}

.fade-in {  /* Re-added fade-in class - good practice */
  animation: fadeIn 0.4s ease-out both;
}

.header .c-seperator {
  color: transparent !important;
}

.form-inline .form-control {
  border-radius: var(--form-control-border-radius);
}

.divfilter select {
  border-radius: var(--form-control-border-radius);
}

.card-body {
  background-color: var(--primary-color) !important;
  border-radius: var(--border-radius) !important;
  padding: 15px !important; /* More padding */
  box-shadow: var(--box-shadow);
}

/* Scrollbar Styling (Webkit - Chrome, Safari) */
::-webkit-scrollbar {
    width: 10px;  /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
    background: var(--scrollbar-track-color); /* Track color */
	border-radius: var(--border-radius);
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color); /* Handle color */
    border-radius: var(--border-radius); /* Rounded corners */
}

::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover-color); /* Handle color on hover */
}


/* Firefox Scrollbar Styling */
html {
    scrollbar-width: thin;  /* "auto" or "thin" */
    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color); /* thumb and track */
}

.table-bordered {
	border: 0.5px solid var(--border-color-light) !important;
}

.listing .active a {
  color: var(--text-color-dark) !important;
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