FROM docker.io/oven/bun:latest

WORKDIR /app

COPY package.json .

COPY bun.lockb .

RUN bun install

COPY . /app

# build the app
RUN bun run build

# start the app
CMD ["bun", "start"]