FROM node:20.16

RUN apt-get update

# cleanup
RUN apt-get clean autoclean && apt-get autoremove -y

RUN mkdir -p /var/www/.local/share/fish

WORKDIR /app
