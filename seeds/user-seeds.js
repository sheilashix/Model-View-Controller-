const { User } = require('../models');

const userData = [
  {
    username: "mike",
    email: "mike@gmail.com",
    password: "password1234"
  },
  {
    username: "tom",
    email: "tom@gmail.com",
    password: "password1234"
  },
  {
    username: "kenda",
    email: "kenda@gmail.com",
    password: "password1234"
  },
  {
    username: "Bius",
    email: "bius@gmail.com",
    password: "password1234"
  },
  {
    username: "Stevo",
    email: "Stevo@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
