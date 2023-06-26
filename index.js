// create a simple express server with default route return "Hello World" and port 3001
const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello CI/CD! 1234'))

app.get('/test', (req, res) => res.send('Test 123'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log(1)

console.log(2)

console.log('rebase')

console.log(2)

console.log(4)

module.exports = app
