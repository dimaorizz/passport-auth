const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    res.render('register')
})

router.post('/', async (req, res) => {
    try {
        const pswdHash = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
        email: req.body.email,
        password: pswdHash,
        })
        newUser.save()
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    
    
})

module.exports = router