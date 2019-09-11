const mongooose = require('mongoose');
const User = mongooose.model('Users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  firstName: {
    type: String,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 2
  },
  username: {
    type: String,
    trim: true,
    minlength: 3,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

module.exports = {
  User
};
