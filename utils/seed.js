const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { username, email } = require('./data');

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected');
    await Application.deleteMany({});
    await User.deleteMany({});


    const users = [];
    for (let i = 0; i < 10; i++) {
    
        users.push({
          username: username[i],
          email: email[i],
        });
      }
      await User.insertMany(users);
      console.log('Seed successful');
    })