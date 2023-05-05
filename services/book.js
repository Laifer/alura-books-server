const fs = require('fs')

function gettAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'))
}

module.exports = {
    gettAllBooks
}