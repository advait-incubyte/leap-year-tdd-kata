import { describe, it, expect } from 'vitest'
import { isLeapYear } from '../src/leapYear'
 
describe('Leap Year', () => {
    it('should be defined', () => {
        expect(isLeapYear).toBeDefined()
    })

    it('should return true for years divisible by 400', () => {
        expect(isLeapYear(2000)).toBe(true)
    })

    it('should return false for years divisible by 100 but not by 400', () => {
        expect(isLeapYear(2100)).toBe(false)
    })

    it('should return true for years divisible by 4 but not by 100', () => {
        expect(isLeapYear(2008)).toBe(true)
    })

    it('should return false for years not divisible by 4', () => {
        expect(isLeapYear(2017)).toBe(false)
    })

    it('should return false for years divisible by 4000', () => {
        expect(isLeapYear(4000)).toBe(false)
    })
})