const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

const sessionAdminAuth = (req,res,next)=>{

    if( req.session.user){
   
        next();
    }else{
        req.flash('messages','Please Login First!');
        res.redirect('/admin');
    }
}

module.exports = sessionAdminAuth;