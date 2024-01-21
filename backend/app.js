const express = require('express');
const app = express()
const port = 5000;
const cors = require("cors");
const logger=require('morgan')
app.use(logger('dev'))
app.use(cors())
require('dotenv').config()
require('./db')
require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/user"))

app.listen(port, () => {
    console.log("server is running on port" + " " + port)
})