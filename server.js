var express = requires("express");

var app = express()

var PORT = process.env.PORT || 8080;

//middleware and urlencoded will 
app.use(express.urlencoded({ extended: true }))
app.use(express.json)

//pass the express app into the routes folder
require('./routes/apiRoutes/')(app);

//pass the html file into the routes folder
require('./route/htmlRoutes')(app);

start our Server
app.list(PORT, function () {
    console.log("App listening on PORT: " + PORT)
})