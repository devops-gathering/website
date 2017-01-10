FROM node:7.2.1-alpine

RUN apk add --no-cache python && npm install -g gulp

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
WORKDIR /node
ENTRYPOINT ["/docker-entrypoint.sh"]
