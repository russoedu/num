import { _date } from '../helpers/_date'
import { _name } from '../helpers/_name'
import { FinalSingleDigitT, SingleDigitT, consonants, vowels, Consonants, Vowels, letterValues } from '../helpers/types'

export class Calculator {
  name: string
  birthday: Date

  /**
   * MOTIVAÇÃO – ALMA /PERSONALIDADE – QUEM É
   */
  mo: FinalSingleDigitT = 0
  /**
   * CAMINHO DO DESTINO – O QUE VEIO FAZER / REALIZAR
   */
  cd: FinalSingleDigitT = 0
  /**
   * EU ÍNTIMO – SONHO – O QUE QUER NA VIDA
   */
  eu: FinalSingleDigitT = 0
  /**
   * EXPRESSÃO – O QUE APARENTA SER
   */
  ex: FinalSingleDigitT = 0
  /**
   * PRIMEIRO DESAFIO
   */
  d1: FinalSingleDigitT = 0
  /**
   * SEGUNDO DESAFIO
   */
  d2: FinalSingleDigitT = 0
  /**
   * DESAFIO MAIOR – O QUE VEIO APRENDER COM DIFICULDADE
   */
  dm: FinalSingleDigitT = 0
  /**
   * PRIMEIRO CICLO
   */
  c1: FinalSingleDigitT = 0
  /**
   * SEGUNDO CICLO
   */
  c2: FinalSingleDigitT = 0
  /**
   * TERCEIRO CICLO
   */
  c3: FinalSingleDigitT = 0
  
  /**
   * PRIMEIRA REALIZAÇÃO
   */
  r1: FinalSingleDigitT = 0
  /**
   * SEGUNDA REALIZAÇÃO
   */
  r2: FinalSingleDigitT = 0
  /**
   * TERCEIRA REALIZAÇÃO
   */
  r3: FinalSingleDigitT = 0
  /**
   * QUARTA REALIZAÇÃO
   */
  r4: FinalSingleDigitT = 0
  /**
   * IDADE FINAL DA R1
   */
  rAges: {r1: number, r2: number, r3: number  } = {
    r1: 0,
    r2: 0,
    r3: 0,
  }
  /**
   * IDADE
   */
  age: number = 0
  /**
   * ANO PESSOAL
   */
  anoPessoal: {
    value: number,
    start: Date,
    end:   Date,
  }

  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    this.birthday = new Date(birthday)

    this.age = this.#getAge()

    const daySum = this.#getCharactersSum(this.birthday.getDate())
    const monthSum = this.#getCharactersSum(this.birthday.getMonth() + 1)
    const yearSum = this.#getCharactersSum(this.birthday.getFullYear())
    const { vowelsInName, consonantsInName } = this.#getLettersInName()

    this.mo = this.#countName(vowelsInName)
    this.eu = this.#countName(consonantsInName)
    this.ex = this.#getCharactersSum(this.mo + this.eu)

    this.cd = this.#getCharactersSum(daySum + monthSum + yearSum, true)
    
    this.c1 = this.#getCharactersSum(monthSum)
    this.c2 = this.#getCharactersSum(daySum)
    this.c3 = this.#getCharactersSum(yearSum)
    
    this.d1 = this.#getCharactersSum(Math.abs(daySum - monthSum))
    this.d2 = this.#getCharactersSum(Math.abs(yearSum - monthSum))
    this.dm = this.#getCharactersSum(Math.abs(this.d1 - this.d2))

    this.r1 = this.#getCharactersSum(daySum + monthSum, true)

    this.r2 = this.#getCharactersSum(daySum + yearSum, true)

    this.r3 = this.#getCharactersSum(this.r1 + this.r2, true)
    this.r4 = this.#getCharactersSum(monthSum + yearSum, true)

    this.rAges.r1 = 36 - this.cd
    this.rAges.r2 = this.rAges.r1 + 10
    this.rAges.r3 = this.rAges.r2 + 10

    this.anoPessoal = {
      value: 9,
      start: new Date('2023-03-17'),
      end:   new Date('2024-03-17'),
    }
  }

  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @returns The sum of each number digit
   */
  #getCharactersSum (num: number): SingleDigitT
  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #getCharactersSum (num: number, final: false): SingleDigitT
  /**
   * Sums the digits of the number until it is a single digit (1 - 9, 11 or 22)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #getCharactersSum (num: number, final: true): FinalSingleDigitT
  
  /**
   * Sums the digits of the number until it is a single digit (1 - 9). If final is true, 11 and 22 are also possible
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #getCharactersSum (num: number, final: boolean): FinalSingleDigitT|SingleDigitT
  
  #getCharactersSum (num: number, final = false) {
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
   * Sets the name vowels and consonants extracted from the name
   */
  #getLettersInName () {
    const vowelsInName = this.name
      .split('')
      .filter(char => vowels.includes(char)) as Vowels[]

    const consonantsInName = this.name
      .split('')
      .filter(char => consonants.includes(char)) as Consonants[]

    return {
      vowelsInName,
      consonantsInName,
    }
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

  #getAge () {
    const otherDate = new Date()

    let years = (otherDate.getFullYear() - this.birthday.getFullYear())

    if (otherDate.getMonth() < this.birthday.getMonth() || 
        otherDate.getMonth() == this.birthday.getMonth() && otherDate.getDate() < this.birthday.getDate()) {
      years--
    }

    return years
  }
}
