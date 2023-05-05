const fs = require('fs')

const currentData = JSON.parse(fs.readFileSync('books.json'))
const newData = { id: '3', name: 'Book more than awesome' } 

fs.writeFileSync('books.json', JSON.stringify([...currentData, newData]))

console.log(JSON.parse(fs.readFileSync('books.json')))