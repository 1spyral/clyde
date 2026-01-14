FROM oven/bun:1.3.6-alpine AS base

WORKDIR /app

COPY package.json bun.lock ./
COPY dimp-auth/package.json dimp-auth/
COPY dimp-bot/package.json dimp-bot/
COPY dimp-dashboard/package.json dimp-dashboard/
COPY dimp-server/package.json dimp-server/

RUN bun install --frozen-lockfile --production --filter dimp-auth

COPY dimp-auth dimp-auth

WORKDIR /app/dimp-auth
ENV NODE_ENV=production

CMD ["bun", "run", "start"]
