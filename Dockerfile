FROM node:18 as development

WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

RUN yarn prisma generate
RUN yarn install --frozen-lockfile

EXPOSE 3000