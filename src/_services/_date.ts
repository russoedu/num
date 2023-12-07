class DateService {
  isValid (d: Date) {
    return (
      typeof d === 'object' &&
      d instanceof Date &&
      !isNaN(d.getTime())
    )
  }
}

const _date = new DateService()
export { _date }