const { Router } = require('express')
const router = Router()

const { getBooks, getBookById, postBook, patchBook, deleteBook  } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBookById)

router.post('/', postBook)

router.patch('/:id', patchBook)

router.delete('/:id', deleteBook)

module.exports = router