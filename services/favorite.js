const fs = require('fs')

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json'))
}

function addFavorite(id) {
    const favorites = JSON.parse(fs.readFileSync('favorites.json'))
    const books = JSON.parse(fs.readFileSync('books.json'))

    const newFavoriteBook = books.find( book => book.id === id )

    const newListOfFavoritesBooks = [...favorites, newFavoriteBook]

    fs.writeFileSync('favorites.json', JSON.stringify(newListOfFavoritesBooks))
}

function removeFavoriteById(id){
    const currentFavorites = JSON.parse(fs.readFileSync('favorites.json'))

    const modifiedFavorites = currentFavorites.filter( book => book.id !== id )

    fs.writeFileSync('favorites.json', JSON.stringify(modifiedFavorites))
}

module.exports = {
    getAllFavorites,
    addFavorite,
    removeFavoriteById
}