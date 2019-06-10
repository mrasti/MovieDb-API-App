
const express = require("express");

const MovieRouter = require('./routes/MovieRouter');
const CrewRouter = require('./routes/CrewRouter');
const PeopleRouter = require('./routes/PeopleRouter');

const app = express();
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use('/api/movies/', MovieRouter);
app.use('/api/crew/', CrewRouter);
app.use('/api/people/', PeopleRouter);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(4000, () => {
//     console.log("app listening on port 4000");
// });
