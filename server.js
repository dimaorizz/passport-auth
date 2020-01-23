const express = require('express')
const session = require('express-session')
const passport = require('passport')
const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})