'use strict';

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const morgan = require('morgan')
const port = 3000;

/**
 * use morgan in project ~ HTTP Logger
 */
app.use(morgan('combined'))

/**
 * Rendering template engine setup
 */
app.engine('.hbs', handlebars.engine({extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

/**
 * static file setup 
 */
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
    res.render('home');
})

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})
