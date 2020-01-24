const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./model/user');
const config = require('./config/key')
mongoose.connect(config.mongoURI, 
  {useNewUrlParser: true}).then( () =>console.log('DBconen'))
  .catch(err => console.error(err));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  
app.get('/',(req,res) => {

   res.json({"Hello" : "Deadddddd343r"})
})

app.post('/api/users/register', (req, res) => { 
   const user = new User(req.body)
    user.save((err, userData) => {
       if(err) return res.json({sucess: false, err})
    })

   return res.status(200)
})
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});