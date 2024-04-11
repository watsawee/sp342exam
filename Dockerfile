FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./event1.html /usr/share/nginx/html/event1.html
COPY ./event2.html /usr/share/nginx/html/event2.html
COPY ./disneyland2.jpg /usr/share/nginx/html/disneyland2.jpg
COPY ./disneyland-a.jpg /usr/share/nginx/html/disneyland-a.jpg
COPY ./maldives.jpg /usr/share/nginx/html/maldives.jpg
COPY ./maldives2.jpg /usr/share/nginx/html/maldives2.jpg
COPY ./maldives3.jpg /usr/share/nginx/html/maldives3.jpg
COPY ./Park-HongKongDisneyLand-Frozen-1.jpg /usr/share/nginx/html/Park-HongKongDisneyLand-Frozen-1.jpg
COPY ./priceCal.js /usr/share/nginx/html/priceCal.js
COPY ./validate.js /usr/share/nginx/html/validate.js
