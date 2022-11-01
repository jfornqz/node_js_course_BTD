const express = require('express');
// const chalk = require('chalk');
const app = express();
const port = 3000;
const debug = require('debug');
const morgan = require('morgan');


app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("hello World");

})

app.listen(port, ()=>{
    debug("Listenning on port %d", port)
})

