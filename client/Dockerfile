# version of node docker image
FROM node:10 

# this is the folder that Docker will use
WORKDIR /app

# copy files and run commands
COPY package.json /app
RUN npm install
COPY . /app
CMD npm start

EXPOSE 3000