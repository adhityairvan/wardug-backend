import dotenv from "dotenv";
let result = dotenv.config()
if (result.error) {
    throw result.error
}
var express = require('express')

var app = express()

app.listen(3400, function(){
    console.log(`Server is listening on port ${process.env.PORT}`)
})

module.exports = app;