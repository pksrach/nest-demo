FROM node:18-alpine

# Set the working directory
WORKDIR ./

# Copy 
COPY package.json ./
COPY package-lock.json ./
COPY dist/ ./dist
COPY node_modules/ ./

# Install dependencies
RUN npm install --production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run","start:prod"]
