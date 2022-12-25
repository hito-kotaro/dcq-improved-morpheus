FROM node

WORKDIR /morpheus
COPY package.json .
COPY yarn.lock .
RUN yarn 
COPY . .
RUN yarn build
ENTRYPOINT ["infrastructure/api/entrypoint.sh"]
