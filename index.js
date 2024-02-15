const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const { testmiddleware } = require('./middlewares/authentication');
const userRoute = require('./routes/UserRoutes')

const app = express();
require("dotenv").config({path: "./config/config.env"});

let port = process.env.PORT || 8000;

app.use(cors({origin: '*'}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(testmiddleware)

app.use('/user', userRoute);

app.get('/', (req, res) => {
    console.log("Hello world!");
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})