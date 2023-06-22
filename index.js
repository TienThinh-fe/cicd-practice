// create a simple express server with default route return "Hello World" and port 3001
const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello CI/CD! 12'))

app.get('/test', (req, res) => res.send('Test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
