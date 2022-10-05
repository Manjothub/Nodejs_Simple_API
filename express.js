const express = require('express');
const app = express();
app.get('',(req,res)=>{
    res.send('<h1>Welcome to Home Page</h1><a href = "/about">Click Here</a>');
}); // routes of Express js

app.get('/about',(req,res)=>{
    res.send(`<input type = "text" value ="${req.query.name}">`);
}); 

app.get('/help',(req,res)=>{
    res.send('Hello,This is Help Page');
}); 

app.listen(5000);