#!/bin/bash

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install nginx
sudo apt install -y nginx

# Configure nginx
sudo tee /etc/nginx/sites-available/react-app <<EOF
server {
    listen 80;
    server_name _;

    root /var/www/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

# Enable the site configuration
sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx

# Create deployment directory
sudo mkdir -p /var/www/html
sudo chown -R $USER:$USER /var/www/html

# Build and deploy the application
npm install
npm run build
sudo cp -r dist/* /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html