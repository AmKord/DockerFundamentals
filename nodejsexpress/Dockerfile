 # Base image, using slim to not download unnecessary files
FROM node:10

# Create app directory
WORKDIR /usr/src/app


# A wildcard is used to ensure both package.json AND package-lock.json are copied
# These are copied before npm install, as only changes made to package.json needs npm install
COPY package*.json ./

#install dependencies
RUN npm install

# copy source
COPY . .

# This is container port, needs to be mapped to localhost port
EXPOSE 8080

#node server.js starts the express app
CMD [ "node", "server.js" ]