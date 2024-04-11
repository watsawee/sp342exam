FROM nginx:latest
COPY index.html /usr/share/nginx/html
COPY event1.html /usr/share/nginx/html
COPY event2.png /usr/share/nginx/html
COPY priceCal.js /usr/share/nginx/html
COPY README.md /usr/share/nginx/html
COPY validate.js /usr/share/nginx/html