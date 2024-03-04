# Use the Node image with Alpine tage as the base image
FROM node:alpine
 
# Copy the package.json file to the image
COPY package.json package.json

# Install required packages
RUN npm install
 
# Expose the required port in the image (check the application port)
# The app inside the container is listening on port 8000
EXPOSE 8000
 
# Copy any other necessary files
#COPY . .
COPY app.js .
 
# Command to run the program
CMD ["npm", "start"]