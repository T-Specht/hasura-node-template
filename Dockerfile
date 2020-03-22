FROM node
WORKDIR /usr/app
COPY package.json .
COPY tsconfig.json .
#RUN apt-get update && apt-get install -y build-essential && apt-get install -y python
RUN yarn install --quiet