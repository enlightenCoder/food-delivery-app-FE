# Stage 1: Build the angular application
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the angular application using nginx
FROM nginx:alpine
COPY --from=build /app/dist/food-delivery-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
