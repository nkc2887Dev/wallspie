# Install dependencies
FROM node:18-alpine AS builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run app
FROM node:18-alpine
WORKDIR /src
COPY --from=builder /src ./
EXPOSE 3000
CMD ["npm", "start"]