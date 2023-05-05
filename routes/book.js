const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    try {
        throw new Error('teste')
        res.send('Ola mundo!!!!!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

router.post('/', (req, res) => {
    res.send(`${req.content}`)
})

module.exports = router