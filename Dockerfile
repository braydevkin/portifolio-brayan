FROM node:18 as development

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn prisma generate

EXPOSE 3000