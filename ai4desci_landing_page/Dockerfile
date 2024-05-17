# Use the official Node.js image.
FROM node:18-alpine

# Install build tools
RUN apk add --no-cache make gcc g++ python3

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install --build-from-source

# Copy the rest of the application to the working directory.
COPY . .

# Build the application.
RUN npm run build

# Expose the port the app runs on.
EXPOSE 3003

# Define the command to run the app.
CMD ["npm", "start"]
