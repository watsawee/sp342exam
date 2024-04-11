FROM nginx:latest
COPY validate.js /usr/share/nginx/html
COPY event1.html /usr/share/nginx/html
COPY event2.html /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY priceCal.js /usr/share/nginx/html
COPY README.md /usr/share/nginx/html

