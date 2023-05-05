const { Router } = require('express')
const router = Router()

const { getBooks, getBookById  } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBookById)

router.post('/', (req, res) => {
    res.send(`${req.content}`)
})

module.exports = router