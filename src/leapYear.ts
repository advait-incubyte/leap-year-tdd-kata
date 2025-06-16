export const isLeapYear = (year: number) : boolean => {
    if (year % 400 === 0)
        return true

    return false
}