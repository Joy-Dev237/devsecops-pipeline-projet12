FROM node:18-alpine AS builder
WORKDIR /app
COPY app/package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && adduser -S node -u 1001 -G nodejs
WORKDIR /app
COPY --from=builder --chown=node:nodejs /app .
USER node
EXPOSE 3000
CMD ["node", "src/app.js"]
