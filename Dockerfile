FROM node:18-alpine

# Remove image first if exists specifically name image
# docker rmi -f nest-demo:latest


# Set the working directory
WORKDIR /

# Copy 
COPY package.json .
COPY package-lock.json .
COPY dist/ .
COPY node_modules/ .

# Install dependencies
RUN npm install --production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run","start:prod"]
