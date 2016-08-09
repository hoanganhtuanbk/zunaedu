FROM ubuntu:14.04.4

# Install NodeJs
RUN apt-get update && apt-get install -y build-essential
RUN apt-get install -y software-properties-common
RUN apt-add-repository ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm -v
RUN npm cache clean -f
RUN npm install -g n
RUN apt-get install -y curl
RUN n 5.4.0
RUN node -v
# Install Python
RUN apt-get install -y python

# Install zip
RUN apt-get install unzip

# Install Strongloop
RUN npm install -g strongloop

# Install Gulp
RUN npm install -g gulp-cli

# Make App Directory
RUN mkdir PAAS

# Copy files to Docker Container
COPY ./ PAAS/
COPY ./files-for-docker/datasources.json PAAS/server/datasources.json

# Install Dependencies
RUN cd PAAS; npm install;

# Build file bundle with Gulp
RUN cd PAAS; gulp build

#PORTS for default config

EXPOSE 3000

CMD ["node", "/PAAS/server/server.js"]





