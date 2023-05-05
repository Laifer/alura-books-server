const { gettAllBooks } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = gettAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}