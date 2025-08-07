# Use official Node.js base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy dependency files first to cache Docker layers
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the port that Next.js listens on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]