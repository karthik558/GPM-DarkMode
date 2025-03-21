#!/bin/bash

# Function to display usage
show_usage() {
    echo "Usage: ./build.sh [chrome|firefox]"
    echo "  chrome  - Build for Chrome"
    echo "  firefox - Build for Firefox"
    exit 1
}

# Check if argument is provided
if [ $# -eq 0 ]; then
    show_usage
fi

# Process the argument
case "$1" in
    "chrome")
        echo "Building for Chrome..."
        cp manifest.chrome.json manifest.json
        ;;
    "firefox")
        echo "Building for Firefox..."
        cp manifest.firefox.json manifest.json
        ;;
    *)
        show_usage
        ;;
esac

echo "Build complete! Use manifest.json for $1" 