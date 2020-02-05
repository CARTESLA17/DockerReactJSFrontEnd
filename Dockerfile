FROM node
LABEL maintainer="CAR-Alpine-Node"

# set working directory
WORKDIR /reactapp

# install and cache app dependencies
COPY ReactApp /reactapp/
RUN npm install --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]