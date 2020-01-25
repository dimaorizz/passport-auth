const express = require('express')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const passport = require('passport')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
const mongooseConnection = require('./mongooseConnection')
const passportInit = require('./passport-config')
const flash = require('express-flash')
const isAuth = require('./utils/isAuth')

const PORT = process.env.PORT || 3000
const app = express()

mongooseConnection()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: process.env.SECRET,
    store: new fileStore(),
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 // 60 minutes
    },
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());
passportInit(passport)

app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.get('/', isAuth, (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})