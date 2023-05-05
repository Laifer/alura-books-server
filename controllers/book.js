const { getAllBooks, getBookUsingId, addBook, modifyBook, removeBook } = require("../services/book")

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

        if(id && Number(id)){
            const book = getBookUsingId(id)
            res.send(book)
        } else {
            res.status(422)
            res.send(`Id ${id} inválido`)
        }

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
        res.send(`Livro ${JSON.stringify(newBook)} inserido com sucesso`)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            const patchedBookData = req.body
            modifyBook(patchedBookData, id)
            res.send(`Livro ${id} modificado com sucesso com os seguintes dados ${JSON.stringify(patchedBookData)}`)
        } else {
            res.status(422)
            res.send(`Id ${id} inválido`)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            removeBook(id)
            res.send(`Livro ${id} removido com sucesso`)
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
    getBooks, 
    getBookById, 
    postBook,
    patchBook,
    deleteBook
}