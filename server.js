var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000; //Once we deploy, it will use the port that Heroku will give it. if not deployed, will run on PORT 3000.

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public")); //telling express that the main folder will be the public folder

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
mongoose.connect(MONGODB_URI);

//Define handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main" //it will ook for main.handlebars for default Layout
}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("app is running on the PORT " + PORT)
});
