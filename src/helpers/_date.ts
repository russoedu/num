class DateService {
  /**
   * Verifies if the string is a valid date
   * @param date - The date string
   * @returns True if the date is valid
   */
  isValid (date: string) {
    const dateRegEx = /(\d{4})-(\d{2})-(\d{2})/

    const exec = dateRegEx.exec(date)

    if (exec === null) return false

    const [_null, year, month, day] = exec.map(v => Number(v))
    const d = new Date(year, month, day)

    const result = (
      typeof d === 'object' &&
      d instanceof Date &&
      !isNaN(d.getTime())
    )

    return result
  }
}

/**
 * Date helper
 */
const _date = new DateService()
export { _date }
