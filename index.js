
const express = require("express");

const MovieRouter = require('./routes/MovieRouter');
const CrewRouter = require('./routes/CrewRouter');
const PeopleRouter = require('./routes/PeopleRouter');

const app = express();
app.use(express.json())

app.use('/api/movies/', MovieRouter);
app.use('/api/crew/', CrewRouter);
app.use('/api/people/', PeopleRouter);

app.listen(4000, () => {
    console.log("app listening on port 4000");
});
