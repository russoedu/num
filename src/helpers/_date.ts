class DateService {
  /**
   * Verifies if the string is a valid date
   * @param date - The date string
   * @returns True if the date is valid
   */
  isValid (date: string) {
    const d = new Date(date)
    
    return (
      typeof d === 'object' &&
      d instanceof Date &&
      !isNaN(d.getTime())
    )
  }
}

/**
 * Date helper
 */
const _date = new DateService()
export { _date }