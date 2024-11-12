FROM public.ecr.aws/docker/library/node:20-alpine

WORKDIR /usr/app
COPY . .

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn start"]