#!/bin/bash

# This script serves the Ashley template using Python's built-in HTTP server
# It will open the template in your default browser

echo "Starting server for Ashley HTML Template..."
echo "Press Ctrl+C to stop the server"

# Check if Python is installed and determine version
if command -v python3 &>/dev/null; then
    # Python 3
    cd "$(dirname "$0")" # Navigate to the script's directory
    echo "Server started at http://localhost:8000/ashley/"
    echo "Opening browser..."
    open "http://localhost:8000/ashley/"
    python3 -m http.server 8000
elif command -v python &>/dev/null; then
    # Python 2
    cd "$(dirname "$0")" # Navigate to the script's directory
    echo "Server started at http://localhost:8000/ashley/"
    echo "Opening browser..."
    open "http://localhost:8000/ashley/"
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python is not installed. Please install Python to use this script."
    exit 1
fi 