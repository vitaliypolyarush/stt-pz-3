/* eslint-env jest */

const apiIceAndFire = require('./anapioficeandfire')

describe('#getBooks() using Promises', () => {
    it('should load books data', () => {
        return apiIceAndFire.getBooks()
            .then(data => {
                expect(data.entity).toBeDefined()
            })
    })
})
