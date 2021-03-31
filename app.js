const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.render('index',{
      title: "Readme Generator",
      name: "Raginee",
  });
})
 
app.listen(3000)