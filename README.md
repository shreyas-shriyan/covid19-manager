<h1 align="center">Covid19 Manager</h1>

<p align="center"><a align="center" href="https://covid19-manager.shreyas-shriyan.vercel.app/">https://covid19-manager.shreyas-shriyan.vercel.app/</a></p>

## Description
A Covid19 employee manager with ability to mark employees positive and quarantine them.

## Screenshots

<p align="center">
  <img src="https://github.com/shreyas-shriyan/cdn/blob/master/covid-manager.png?raw=true" alt="search" >
</p>

## Assumptions
### Login Details
 username : Amit Kumar |
 password : 12345678
 
### Users to mark covid+ve
1) employee id : 9500096 | name : Aklish Mourya
2) employee id : 1000228 | name : Sahab Singh

## Running Locally

### starting server

1. To get started
```
cd server
```
2. Install dependencies
```
yarn install
```
3. add .env file with these contents
```
MONGODB_URL="mongodb+srv://shreyas:Shreyas@cluster0.hrkyp.mongodb.net/covid19-manager?retryWrites=true&w=majority"
JWT_SECRET="e59f27c7ccec4f349386403e03bb95bcecfefeb54e1a6b8a023107d4f9baf77de3da2602c19553726f1c4da0db942ec140a18ebfab9bf4e966ba2cf6d45f7ec6"
```
4. Start the server
```
node app.js
```
### starting client

1. To get started
```
cd client
```
2. Install dependencies
```
yarn install
```
3. Start the client
```
yarn start
```

## API Hosted on heroku
[https://covid19-manager.herokuapp.com/api/user](https://covid19-manager.herokuapp.com/api/user)

## Technologies:
- React
- Redux
- Express
- MongoDB

