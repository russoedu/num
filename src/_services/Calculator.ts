import { _date } from '../helpers/_date'
import { _name } from '../helpers/_name'
import { FinalSingleDigitT, SingleDigitT, consonants, vowels, Consonants, Vowels, letterValues } from '../helpers/types'

export class Calculator {
  name: string
  birthday: Date

  daySum: SingleDigitT
  monthSum: SingleDigitT
  yearSum: SingleDigitT

  cd: FinalSingleDigitT = 0
  d1: FinalSingleDigitT = 0
  d2: FinalSingleDigitT = 0
  dm: FinalSingleDigitT = 0
  
  mo: FinalSingleDigitT = 0
  eu: FinalSingleDigitT = 0
  ex: FinalSingleDigitT = 0
  r1: any
  r2: any
  r1End: any
  pyStart: any
  pyEnd: any
  age: any

  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    this.birthday = new Date(birthday)

    this.daySum = this.#getCharactersSum(this.birthday.getDate())
    this.monthSum = this.#getCharactersSum(this.birthday.getMonth() + 1)
    this.yearSum = this.#getCharactersSum(this.birthday.getFullYear())

    this.cd = this.#getCharactersSum(this.daySum + this.monthSum + this.yearSum, true)
    
    this.#setDifficulties()

    this.#setMoExEu()
  }

  /**
   * Sums the digits of the number until it is a single digit (1 - 9) || 11 || 22
   * final needs to be true so result can be 11 or 22
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #getCharactersSum <final extends boolean> (num: number, final = false): final extends true ? FinalSingleDigitT : SingleDigitT {
    let sum: any = 0

    if (num > 9 && (final !== true || (num != 11 && num != 22))) {
      while (num) {
        sum += num % 10
        num = Math.floor(num / 10)
      }

      sum = this.#getCharactersSum(sum, final)

    } else {
      sum = num
    }
    
    return sum
  }

  /**
   * Sets all difficulties
   */
  #setDifficulties () {
    this.d1 = this.#getCharactersSum(Math.abs(this.daySum - this.monthSum))
    this.d2 = this.#getCharactersSum(Math.abs(this.yearSum - this.monthSum))
    this.dm = this.#getCharactersSum(Math.abs(this.d1 - this.d2))
  }

  /**
   * Sets the name vowels and consonants extracted from the name
   */
  #setMoExEu () {
    const vowelsInName = this.name
      .split('')
      .filter(char => vowels.includes(char)) as Vowels[]

    const consonantsInName = this.name
      .split('')
      .filter(char => consonants.includes(char)) as Consonants[]

    this.mo = this.#countName(vowelsInName)
    this.eu = this.#countName(consonantsInName)
    this.ex = this.#getCharactersSum(this.mo + this.eu)
  }

  #countName (lettersInName: Consonants[]|Vowels[]) {
    let nameSum = 0

    for (let j = 0; j < lettersInName.length; j++) {
      const ch = lettersInName[j]
      const chValue = letterValues[ch]

      nameSum += chValue
    }

    return this.#getCharactersSum(nameSum, true)
  }
}
