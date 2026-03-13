# Use official nginx image as a base
FROM nginx:alpine
# Copy the static files from the build directory to the nginx html directory
COPY dist /usr/share/nginx/html
# Copy a defau;t nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
# Use the default nginx configuration file
# This Dockerfile sets up a simple Nginx server to serve static files from the 'dist' directory.
# The 'dist' directory should contain the built files of your application.