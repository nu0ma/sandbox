FROM node:16

WORKDIR .

COPY . .
RUN yarn
RUN yarn build

CMD ["yarn", "start" ]