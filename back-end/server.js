const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');

const app = express();
app.use(bodyParser.json());

// define routes
app.post('/users', (req, res) => {
  const {
    email,
    firstName,
    lastName,
    username,
    age,
    password,
    country,
    gender
  } = req.body;

  try {
    if (!validator.isEmail(email)) {
      return res.status(500).json({
        error: 'email is not valid'
      });
    }

    let newUser = new User({
      email,
      firstName,
      lastName,
      username,
      age,
      password,
      country,
      gender
    });

    newUser.save().then(
      doc => {
        res.send(doc);
      },
      error => {
        res.send(error);
      }
    );
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log('Listen in port 3000');
});

module.exports = {
  app
};
