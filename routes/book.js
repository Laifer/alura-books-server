const { Router } = require('express')
const router = Router()

const { getBooks, getBookById, postBook, patchBook  } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBookById)

router.post('/', postBook)

router.patch('/:id', patchBook)

module.exports = router