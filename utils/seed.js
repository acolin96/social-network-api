const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { usernames, emails } = require('./data');

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected');
    await Thoughts.deleteMany({});
    await User.deleteMany({});


    const users = [];
    for (let i = 0; i < 10; i++) {
    
        users.push({
          username: usernames[i],
          email: emails[i],
        });
      }
      await User.insertMany(users);
      console.log('Seed successful');

      process.exit(0)
    })