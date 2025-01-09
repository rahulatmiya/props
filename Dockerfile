From node:13-alpine
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY . /home/app

RUN chown -R node:node /home/app

CMD ["node","/home/app/server.js"]

# # Use the official Node.js image from the Docker hub
# FROM node:16

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json (if available)
# COPY package*.json ./

# # Install the Node.js dependencies
# RUN npm install

# # Copy the entire application code into the container
# COPY . .

# # Expose the port the app runs on (e.g., 3000)
# EXPOSE 3000

# # Define the command to run your app
# CMD ["npm", "start"]