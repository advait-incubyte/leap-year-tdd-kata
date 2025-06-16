export const isLeapYear = (year: number) : boolean => {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
        return true

    return false
}