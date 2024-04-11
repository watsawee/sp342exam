FROM nginx:latest
COPY event1.html event2.html index.html priceCal.js validate.js images /usr/share/nginx/html/