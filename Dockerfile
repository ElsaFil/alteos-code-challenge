# BACKEND
# version of node docker image
FROM node:10 

# this is the folder that Docker will use
WORKDIR /app

# copy files and run commands
COPY package.json /app
RUN npm install
RUN npm install nodemon
COPY . /app
CMD npm run dev

EXPOSE 5555