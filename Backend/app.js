var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.log("DB Connectedddd!!!!!!!!!!!");
        server.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

server.use(cors());
server.use(express.json());
server.use(routes);