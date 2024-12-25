FROM public.ecr.aws/docker/library/node:20-alpine

# Install jq for JSON parsing
RUN apk add --no-cache jq

# Set environment variables
ARG APP_CONFIG

WORKDIR /usr/app
COPY . .

# Convert APP_CONFIG JSON into .env format and save to .env file
RUN echo $APP_CONFIG | jq -r 'to_entries | .[] | "\(.key)=\(.value)"' > .env

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn", "start"]