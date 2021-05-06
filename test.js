const assert = require('assert')
const add = require('./src/lib')

it('Adding 2 and 4', () => {
    assert.equal(add(2, 4), 6)
})