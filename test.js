const assert = require('assert/')
const add = require('./src/lib')

it('adding 2 and 4', () =>{
    assert.equal(add(2, 4), 6)
})