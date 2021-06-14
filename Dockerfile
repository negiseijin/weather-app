FROM node:14-alpine AS deps

RUN apk update && \
    apk --no-cache add \
    git \
    vim \
    openssh
