FROM nginx:latest
COPY ./event1.html /usr/share/nginx/html/
COPY ./event2.html /usr/share/nginx/html/
COPY ./index.html /usr/share/nginx/html/
COPY ./priceCal.js /usr/share/nginx/html/
COPY ./style.css /usr/share/nginx/html/
COPY ./validate.js /usr/share/nginx/html/
