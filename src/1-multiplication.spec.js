import { multiply } from './1-multiplication'

// this is your accual test 
describe('1-multiplication', () => {
  it('should return the value from multiplying two numbers', () => {
    expect(multiply(2, 2)).toEqual(4)
  })
})
