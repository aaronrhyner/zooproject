FROM node:13.12.0-alpine

# install app dependencies
COPY package.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]