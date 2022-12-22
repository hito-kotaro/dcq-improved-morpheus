FROM node

WORKDIR /morpheus
COPY package.json .
RUN yarn 
COPY . .
RUN yarn build
ENTRYPOINT ["infrastructure/api/entrypoint.sh"]
