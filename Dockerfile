FROM nginx:latest
COPY ./index.html /usr/share/ngin/html/index.html
COPY ./event.css /usr/share/ngin/css/event.css
COPY ./event1.html /usr/share/ngin/html/event1.html
COPY ./event2.html /usr/share/ngin/html/event2.html
COPY ./priceCal.js /usr/share/ngin/js/priceCal.js
COPY ./validate.js /usr/share/ngin/js/validate.js