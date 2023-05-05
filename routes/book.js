const { Router } = require('express')
const router = Router()

const { getBooks } = require('../controllers/book')

router.get('/', getBooks)

router.post('/', (req, res) => {
    res.send(`${req.content}`)
})

module.exports = router