
## Project Title : MovieDb API Application
The goal of this project is to create a RESTful API with Node.js. "The Movie Database"(TMDb) is the online API that was used to pull data from and this data was used to create a database in MongoDB. Then Express and MongoDB were used to create a full CRUD application. As the last step the database was hosted on Mongo Atlas and the application was deployed on Heroku.

Visit [The Movie DB](https://www.themoviedb.org/documentation/api) for more information about the database.

## Technologies Used
+ Node.js
+ Express
+ Mangoose
+ MangoDB
+ Mongo Atlas
+ Heroku

## Description of the project

1. As the first step I created a directory called project_2.

2. By executing the following command in the terminal, we can set up npm packages.
```javascript
npm init
```
In order to skip the questions we can use:
```javascript
npm init -y
```
The above commands result in creating a package.json file. This file is used to manage the locally installed npm packages. It also includes the meta data about the project such as name and version number.

3. Now we can install the packages we will be using for this project. The packages we need are Express and Mangoose.
```javascript
npm install --save express mongoose
```

4. I created a file named index.js, required express in that file and initialized the express app.
```javascript
const express = require("express");
const app = express();
```
Since the express version used in this project is 4.17.1, we can use ```express.json()``` instead of ```bodyParser.json()```.
```javascript
app.use(express.json())
```
I also chose a port and had my express app listen to that port.
```javascript
app.listen(4000, () => {
    console.log("app listening on port 4000");
});
```

5. The following image shows how the app was structured by creating some subdirectories.
<p align="center">
  <img src="https://i.imgur.com/RRHsvvf.png">
</p>

6. Now we can define the schema for our models in models directory. There are going to be three models:
+ Movie
<p align="center">
  <img src="https://i.imgur.com/Atv50IW.png">
</p>

+ Crew 
<p align="center">
  <img src="https://i.imgur.com/RK7FDBe.png">
</p>

+ Person
<p align="center">
  <img src="https://i.imgur.com/9tJSpu6.png">
</p>

7. By creating ```get_seedmovies.js``` and ```get_seedcrew.js``` we can fetch data from TMDb API and seed the three collections in project_2 database.

8. The next step is to define routers and controllers. The last step before trying out the routes is to add routers to ```index.js```.
<p align="center">
  <img src="https://i.imgur.com/8dw7D5D.png">
</p>

9. At this stage the data can be queried from the local server. After executing ```node index.js```in the terminal, Postman can be used to test API endpoints.
<p align="center">
  <img width= 85% src="https://i.imgur.com/evPaMhj.png">
</p>

## API Documentation

|           Movie Collection       |
|---------------|-------------|------|
| Path          |      Method   |   |
|---------------|-------------|------|
| /             |       get     |    |
| /:id          |       get     |    |
| /title/:title |       get     |     |

