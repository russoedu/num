import { _date } from '../helpers/_date'
import { _name } from '../helpers/_name'

export class Calculator {
  name: string
  birthday: Date

  daySum: number
  monthSum: number
  yearSum: number
  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    this.birthday = new Date(birthday)

    const [yearSum, monthSum, daySum] = birthday.split('-')

    this.daySum = Number(daySum)
    this.monthSum = Number(monthSum)
    this.yearSum = Number(yearSum)
  }
}