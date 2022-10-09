const { json } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'public')
app.set('view engine','ejs');

// app.use(express.static(publicPath));
//Routes Started Here
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// })

app.get('/profile',(_,resp)=>{
    const user = {
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
        skills:['php','js']
    }
    resp.render('profile',{user});
})
app.listen(3000);