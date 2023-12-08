class DateService {
  isValid (date: string) {
    const d = new Date(date)
    
    return (
      typeof d === 'object' &&
      d instanceof Date &&
      !isNaN(d.getTime())
    )
  }
}

const _date = new DateService()
export { _date }