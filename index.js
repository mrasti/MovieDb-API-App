
const express = require("express");
const parser = require('body-parser')

const MovieRouter = require('./routes/MovieRouter');
// const PeopleRouter = require('./routes/PeopleRouter.js');

const app = express()

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use('/api/movies/', MovieRouter);
// app.use('/people/', PeopleRouter);

app.listen(4000, () => {
    console.log("app listening on port 4000");
});
