const express = require('express')
const routeBook = require('./routes/book')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/books', routeBook)

const port = 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})