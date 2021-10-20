const { expect } = require('@jest/globals');
const { average } = require('../utils/for_testing');

describe('average', () => {
    test('of one value is the value itself', () => {
        expect(average([1])).toBe(1)
    })

    test('of 1,2,3,4,5,6 values is 3.5', () => {
        expect(average([1,2,3,4,5,6])).toBe(3.5)
    })

    test('of empty array is 0', () => {
        expect(average([])).toBe(0)
    })

})