#!/bin/bash

# This script builds the personal homepage and deploys it to a server.

# Exit immediately if a command exits with a non-zero status.
set -e

# 1. Build the project
echo "Building the project..."
npm run build

# 2. Deploy to the server
# Replace the following with your server details.
# USER: The username on your server (e.g., root, ubuntu).
# SERVER_IP: The IP address of your server.
# TARGET_DIR: The directory on your server where the website should be deployed
#             (e.g., /var/www/html).

# USER="your_user"
# SERVER_IP="your_server_ip"
# TARGET_DIR="/your/target/directory"

# echo "Deploying to ${USER}@${SERVER_IP}:${TARGET_DIR}..."
# scp -r dist/* "${USER}@${SERVER_IP}:${TARGET_DIR}"

echo "Deployment script created."
echo "Please edit this file and fill in your server details."
echo "Then, you can run this script with './deploy.sh' to deploy your website."
