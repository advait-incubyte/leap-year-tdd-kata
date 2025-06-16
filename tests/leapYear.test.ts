import { describe, it, expect } from 'vitest'
import { isLeapYear } from '../src/leapYear'
 
describe('Leap Year', () => {
    it('should be defined', () => {
        expect(isLeapYear).toBeDefined()
    })
})