const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.render('register')
})

router.post('/', async (req, res) => {
    const pswdHash = await bcrypt.hash(req.body.password, 10)
    
})

module.exports = router