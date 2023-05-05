const { getAllBooks, getBookUsingId, addBook } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBookById(req, res) {
    try {
        const id = req.params.id
        const book = getBookUsingId(id)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body
        addBook(newBook)
        res.status(201)
        res.send(`Livro ${newBook} inserido com sucesso`)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks, 
    getBookById, 
    postBook
}