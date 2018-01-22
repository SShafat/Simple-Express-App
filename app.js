var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var link = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');

app.set('views', './views/');



app.get('/', function(req,res){
   res.render('simple.ejs') 
});



app.post('/', link, function(req, res) {
   var tName = req.body.fname;
   var pAge = req.body.age;
   

   console.log(tName);
   console.log(pAge);
   
   res.render('simple.ejs',{
       name: req.body.fname,
       age: req.body.age
    });
});




   
   

//app.get('/', function(req, res) {
////    res.render('simple.ejs', {
////       //object: object
////
////    });
////
////
////
////});

//var server = app.listen(7777, listening);
//
//
//function listening(){
//    console.log("Now listening on port 7777")
//}
