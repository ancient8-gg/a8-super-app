FROM public.ecr.aws/docker/library/node:20-alpine

# Set environment variables
ARG WAGMI_PROJECT_ID
ARG STRAPI_API
ENV NEXT_PUBLIC_PROJECT_ID=${WAGMI_PROJECT_ID}
ENV NEXT_PUBLIC_STRAPI_API_URL=${STRAPI_API}

WORKDIR /usr/app
COPY . .

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn", "start"]