# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile using slim to not download unnecessary files
FROM node:10
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app
 
# Copies package.json and package-lock.json to Docker environment
COPY package.json ./
RUN rm -rf node_modules
RUN rm -rf package-lock.json
 
# Installs all node packages
RUN npm install
 
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application, this is container port, needs to be mapped to localhost port
EXPOSE 3000
 
# Finally runs the application
CMD [ "npm", "start" ]