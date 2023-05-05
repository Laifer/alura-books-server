const fs = require('fs')

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'))
}

function getBookUsingId(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))

    const filteredBook = books.filter( book => book.id === id )[0]

    return filteredBook
}

function addBook(newBook) {
    const books = JSON.parse(fs.readFileSync('books.json'))

    const newListOfBooks = [...books, newBook]

    fs.writeFileSync('books.json', JSON.stringify(newListOfBooks))
}

module.exports = {
    getAllBooks, 
    getBookUsingId,
    addBook
}