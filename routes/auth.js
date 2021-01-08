const router = require('express').Router()


router.post('/signup', (req, res) => {
    res.send('Register')
})

module.exports = router