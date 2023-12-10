import { _date } from '../helpers/_date'
import { _name } from '../helpers/_name'
import { FinalSingleDigitT, LetterType, SingleDigitT, consonants, vowels } from '../helpers/types'

export class Calculator {
  name: string
  birthday: Date

  daySum: SingleDigitT
  monthSum: SingleDigitT
  yearSum: SingleDigitT

  mo: FinalSingleDigitT
  eu: FinalSingleDigitT
  ex: FinalSingleDigitT
  cd: FinalSingleDigitT
  d1: FinalSingleDigitT
  d2: FinalSingleDigitT
  dm: FinalSingleDigitT
  r1: any
  r2: any
  r1End: any
  pyStart: any
  pyEnd: any
  age: any

  #vowelsInName: string[]
  #consonantsInName: string[]

  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    this.birthday = new Date(birthday)

    this.daySum = this.#getSumValues(this.birthday.getDate())
    this.monthSum = this.#getSumValues(this.birthday.getMonth() + 1)
    this.yearSum = this.#getSumValues(this.birthday.getFullYear())

    this.cd = this.#getSumValues(this.daySum + this.monthSum + this.yearSum, true)
    this.d1 = this.#getDifficulty(this.daySum, this.monthSum)
    this.d2 = this.#getDifficulty(this.yearSum, this.monthSum)
    this.dm = this.#getDifficulty(this.d1, this.d2)

    const letterGroups = this.#getLettersGroups(this.name)
    
    this.#vowelsInName = letterGroups.vowelsInName
    this.#consonantsInName = letterGroups.consonantsInName
  }

  /**
   * Sums the digits of the number until it is a single digit (1 - 9) || 11 || 22
   * final needs to be true so result can be 11 or 22
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #getSumValues <final extends boolean> (num: number, final = false): final extends true ? FinalSingleDigitT : SingleDigitT {
    let sum: any = 0

    if (num > 9 && (final !== true || (num != 11 && num != 22))) {
      while (num) {
        sum += num % 10
        num = Math.floor(num / 10)
      }

      sum = this.#getSumValues(sum, final)

    } else {
      sum = num
    }
    
    return sum
  }

  #getDifficulty (sum1: number, sum2: number) {
    const big = Math.max(sum1, sum2)
    const small = Math.min(sum1, sum2)

    return this.#getSumValues(big - small)
  }

  #getLettersGroups (name: string) {
    const vowelsInName = name
      .split('')
      .filter(char => vowels.includes(char))
      .sort()
    const consonantsInName = name
      .split('')
      .filter(char => consonants.includes(char))
      .sort()

    return {
      vowelsInName,
      consonantsInName,
    }
  }

}
