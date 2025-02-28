# Base image
FROM alpine:latest

# Working directory
WORKDIR /app

# Install dependencies
RUN apk add --no-cache nodejs npm

# Install main package
RUN npm install -g live-server

# Expose internet port
EXPOSE 5501

# Deployment command
CMD ["live-server", "--host=0.0.0.0", "--port=5501", "--watch=/app"]
