const request = require('supertest')
const app = require('./index')

describe('GET /', function () {
  it('respond with Hello World', function (done) {
    request(app).get('/').expect('Hello CI/CD! 12', done)
  })
})
