FROM nginx:latest
COPY index.html /usr/share/ngin/html/
COPY event1.html /usr/share/ngin/html/
COPY event2.html /usr/share/ngin/html/
COPY priceCal.js /usr/share/ngin/html/
COPY README.md /usr/share/ngin/html/
COPY validate.js /usr/share/ngin/html/