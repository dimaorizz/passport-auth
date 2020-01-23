const express = require('express')
const session = require('express-session')
const passport = require('passport')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
const PORT = process.env.PORT || 3000
const app = express()
const passportInit = require('./passport-config')


app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: false }))
app.use('/login', loginRouter)
app.use('/regiter', registerRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})