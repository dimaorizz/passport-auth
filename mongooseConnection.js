require('dotenv').config()

const mongoose = require('mongoose')

function mongooseConnection() {
    mongoose.connect(process.env.DB_CONNECTION_STRING, 
        { useNewUrlParser:true, useFindAndModify: true, useUnifiedTopology: true },
        (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('MongoDB connected!')
        }
    })

    mongoose.connection.on('disconnected', () => {
        mongooseConnection()
    })
}

module.exports = mongooseConnection
