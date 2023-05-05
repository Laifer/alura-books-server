const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('Ola mundo!!!!!')
})

router.post('/', (req, res) => {
    res.send(`${req.content}`)
})

module.exports = router