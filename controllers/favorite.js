const { getAllFavorites, addFavorite, removeFavoriteById } = require("../services/favorite")

function getFavoritess(req, res) {
    try {
        const books = getAllFavorites()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            addFavorite(req.params.id)
            res.status(201)
            res.send(`Livro de Id ${JSON.stringify(id)} inserido na lista de favoritos com sucesso`)
        } else {
            res.status(422)
            res.send(`Id ${id} inválido`)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            removeFavoriteById(id)
            res.send(`Livro de Id ${id} removido da lista de favoritos com sucesso`)
        } else {
            res.status(422)
            res.send(`Id ${id} inválido`)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritess, 
    postFavorite,
    deleteFavorite
}