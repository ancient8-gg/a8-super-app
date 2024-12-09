FROM public.ecr.aws/docker/library/node:20-alpine

# Set environment variables
ARG WAGMI_PROJECT_ID
ARG STRAPI_API
ARG APP_ENV
ARG BRIDGE_API
ARG ORDERBOOK_API
ARG NFT_MARKETPLACE_URL
ARG STATS_ANCIENT8_PROXY

ENV NEXT_PUBLIC_WAGMI_PROJECT_ID=${WAGMI_PROJECT_ID}
ENV NEXT_PUBLIC_STRAPI_API=${STRAPI_API}
ENV NEXT_PUBLIC_ENV=${APP_ENV}
ENV NEXT_PUBLIC_BRIDGE_API=${BRIDGE_API}
ENV NEXT_PUBLIC_ORDERBOOK_API=${ORDERBOOK_API}
ENV NEXT_PUBLIC_NFT_MARKETPLACE_URL=${NFT_MARKETPLACE_URL}
ENV NEXT_PUBLIC_STATS_ANCIENT8_PROXY=${STATS_ANCIENT8_PROXY}

WORKDIR /usr/app
COPY . .

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn", "start"]