const {describe, it} = require('mocha')
const {expect} = require('chai')
const request = require('request')

describe('request', () => {
  it('should return a JSON array', function (done) {
    const options = {
      url: 'http://localhost:3000/notes',
      headers: {
        'content-type': 'application/json'
      },
      json:true
    }
    request.get(options, function (err, res, body) {
      expect(err).to.equal(null)
      expect(body).to.be.an('array')
      done()
    })
  })
})
