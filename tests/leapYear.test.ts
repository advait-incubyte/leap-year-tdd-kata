import { describe, it, expect } from 'vitest'
import { isLeapYear } from '../src/leapYear'
 
describe('Leap Year', () => {
    it('should be defined', () => {
        expect(isLeapYear).toBeDefined()
    })

    it('should return true for years divisible by 400', () => {
        expect(isLeapYear(2000)).toBe(true)
    })
})