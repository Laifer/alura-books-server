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

function modifyBook(updatedData, id){
    let currentBooks = JSON.parse(fs.readFileSync('books.json'))

    const indexModifiedBook = currentBooks.findIndex(book => book.id === id)

    const modifiedBook = {...currentBooks[indexModifiedBook], ...updatedData}

    currentBooks[indexModifiedBook] = modifiedBook

    fs.writeFileSync('books.json', JSON.stringify(currentBooks))
}

function removeBook(id){
    const currentBooks = JSON.parse(fs.readFileSync('books.json'))

    const modifiedBooks = currentBooks.filter( book => book.id !== id )

    fs.writeFileSync('books.json', JSON.stringify(modifiedBooks))
}

module.exports = {
    getAllBooks, 
    getBookUsingId,
    addBook,
    modifyBook,
    removeBook
}