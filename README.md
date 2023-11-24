# Basic Ecommerce Website 
> An Ecommerce website built using MERN and Tailwind css

This is a full stack Ecommerce Web Application built using MongoDB,Express.JS,React.JS,Node.JS

### Features

- Upload Products on the website
- View Products 
- You can Add to cart items
- view the product in details 
- Magnify the Product Image for better Visibility


### Env variables (Frontend)

```
# make sure you add a / at the end of the url
# eg: http://localhost:5001/ 👈
REACT_APP_BACKEND_URL="" 

```
### Environment variables (Backend)

```
DATABASE_URL_MONGO='mongodb://127.0.0.1:27017/'
DATABASE_NAME=''         
PORT=5001
```
#### Install dependencies (frontend & backend)

```
npm install
cd backend
npm install
```
### Run

```
# Run frontend (:3000) & backend (:5001)
 npm start

# Run backend only
node app.js
or 
npm start
```
## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
**note this project is a demo project not for production use this is a basic ecommerce demo app. will make an advance full fledged ecommerce application.**