function getBooks(req, res) {
    try {
        res.send('Ola mundo!!!!!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}