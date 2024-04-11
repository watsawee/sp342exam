FROM nginx:latest
COPY nginx-config1.conf /etc/nginx/nginx.conf
COPY static-files1 /usr/share/nginx/html
