const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nilesh:singh1762@react-app-sbrn1.mongodb.net/test?retryWrites=true&w=majority', 
  {useNewUrlParser: true}).then( () =>console.log('DBconen'))
  .catch(err => console.error(err));



app.get('/', (req,res) => { 
   res.send('Hello World')
});

app.listen(5000);