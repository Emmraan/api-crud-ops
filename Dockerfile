# Use an official Node.js runtime as the base image
FROM node:18

# Create a non-root user and set it as the current user
RUN useradd -m appuser

# Set the working directory
WORKDIR /app

# Set the non-root user for running the container
USER appuser

# Copy package.json and package-lock.json first to take advantage of Docker cache
COPY --chown=appuser:appuser package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=appuser:appuser . .

# Expose the port if your application listens to a specific port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
