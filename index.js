var express = require('express');
const app = express.Route();
app.get('/admin',(req,res)=>{
  res.send('working');
})



app.listen(3000);   
