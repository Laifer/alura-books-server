const { Router } = require('express')
const router = Router()

const { getBooks, getBookById, postBook  } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBookById)

router.post('/', postBook)

module.exports = router