const { Router } = require('express')
const router = Router()

const { getFavoritess, postFavorite, deleteFavorite  } = require('../controllers/favorite')

router.get('/', getFavoritess)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router