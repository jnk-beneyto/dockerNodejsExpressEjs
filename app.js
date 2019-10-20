'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();

//settings

app.set('view engine', 'ejs');

//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

//routes

app.get('/', (req,res)=>{
    var athletes = [
        {
            name : "Jordan",
            sport: "basketball"
        },
        {
            name : "Maradona",
            sport: "football"
        },
        {
            name : "Federer",
            sport: "tennis"
        }
    ]
    res.render('index',{athletes:athletes});
})

//server

app.listen(port, (err,res)=>{
    if(err) {throw err};
    console.log('server running on port ' + port); 
})