const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, {logging: false})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

const CheckIn = db.define('checkIn', {
  moodRating: {
    type: Sequelize.INTEGER
  },
  highlight: {
    type: Sequelize.TEXT
  },
  learnings: {
    type: Sequelize.TEXT
  }
})

const syncAndSeed = () => {
  return db.sync({force: true})
    .then(()=> {
      console.log('synced')
      User.create({name: "Cang Truong", email: "cang@email.com"})
      CheckIn.create({moodRating: 8, highlight: "I made a delicious dinner today", learnings: "You are not responsible for someone else's emotional health"})
    })
    .then(()=> {
      console.log('seeded')
    })
    .catch(err => console.log(err))
}

module.exports = {
  User,
  CheckIn,
  syncAndSeed
}
