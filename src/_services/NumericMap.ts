import { _array } from '../helpers/_array'
import { _date } from '../helpers/_date'
import { _name } from '../helpers/_name'
import { FinalSingleDigitT, SingleDigitT, consonants, vowels, Consonants, Vowels, letterValues } from '../helpers/types'

export class NumericMap {
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
  personalYear: {
    value: number,
    start: Date,
    end:   Date,
  } = {} as any

  #daySum: number
  #monthSum: number
  #yearSum: number

  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    this.birthday = new Date(birthday)

    this.age = this.#getAge()

    this.#daySum = this.#getCharactersSum(this.birthday.getDate())
    this.#monthSum = this.#getCharactersSum(this.birthday.getMonth() + 1)
    this.#yearSum = this.#getCharactersSum(this.birthday.getFullYear())
    const { vowelsInName, consonantsInName } = this.#getLettersInName()

    this.mo = this.#countName(vowelsInName)
    this.eu = this.#countName(consonantsInName)
    this.ex = this.#getCharactersSum(this.mo + this.eu)

    this.cd = this.#getCharactersSum(this.#daySum + this.#monthSum + this.#yearSum, true)
    
    this.c1 = this.#getCharactersSum(this.#monthSum)
    this.c2 = this.#getCharactersSum(this.#daySum)
    this.c3 = this.#getCharactersSum(this.#yearSum)
    
    this.d1 = this.#getCharactersSum(Math.abs(this.#daySum - this.#monthSum))
    this.d2 = this.#getCharactersSum(Math.abs(this.#yearSum - this.#monthSum))
    this.dm = this.#getCharactersSum(Math.abs(this.d1 - this.d2))

    this.r1 = this.#getCharactersSum(this.#daySum + this.#monthSum, true)

    this.r2 = this.#getCharactersSum(this.#daySum + this.#yearSum, true)

    this.r3 = this.#getCharactersSum(this.r1 + this.r2, true)
    this.r4 = this.#getCharactersSum(this.#monthSum + this.#yearSum, true)

    this.rAges.r1 = 36 - this.cd
    this.rAges.r2 = this.rAges.r1 + 10
    this.rAges.r3 = this.rAges.r2 + 10

    this.personalYear = this.#getInterestYear()
  }

  /**
   * List of numbers in the map
   */
  get numbers () {
    return  [
      this.mo,
      this.eu,
      this.cd,
      this.ex,
      this.d1,
      this.d2,
      this.dm,
      this.c1,
      this.c2,
      this.c3,
      this.r1,
      this.r2,
      this.r3,
      this.r4,
    ]
  }
  /**
   * List of fixed numbers in the map
   */
  get fixedNumbers () {
    return  [
      this.mo,
      this.eu,
      this.cd,
      this.ex,
      this.dm,
    ]
  }

  /**
   * List of fixed numbers and VNs in the map
   */
  get fixedVnNumbers () {
    return  [
      { vn: 'MO', number: this.mo },
      { vn: 'EU', number: this.eu },
      { vn: 'CD', number: this.cd },
      { vn: 'EX', number: this.ex },
      { vn: 'DM', number: this.dm },
    ]
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers in the map
   */
  get firstCycleNumbers () {
    return this.firstCycleVnNumbers.map(vn => vn.number)
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers and VNs in the map
   */
  get firstCycleVnNumbers () {
    const cycleStart = 0
    const cycleEnd = 28

    const list =  [
      { vn: 'MO', number: this.mo },
      { vn: 'EU', number: this.eu },
      { vn: 'CD', number: this.cd },
      { vn: 'EX', number: this.ex },
      { vn: 'DM', number: this.dm },
      { vn: 'D1', number: this.d1 },
      { vn: 'C1', number: this.c1 },
    ]

    if (this.rAges.r1 >= cycleStart && this.rAges.r1 <= cycleEnd) {
      list.push({ vn: 'R1', number: this.r1 })
    }
    if (this.rAges.r2 >= cycleStart && this.rAges.r2 <= cycleEnd) {
      list.push({ vn: 'R2', number: this.r2 })
    }
    if (this.rAges.r3 >= cycleStart && this.rAges.r3 <= cycleEnd) {
      list.push({ vn: 'R3', number: this.r3 })
    }
    if (this.rAges.r3 >= cycleEnd) {
      list.push({ vn: 'R4', number: this.r4 })
    }

    return list
  }

  /**
   * List of the second cycle (28 to 56 years old) numbers in the map
   */
  get secondCycleNumbers () {
    return this.secondCycleVnNumbers.map(vn => vn.number)

  }

  /**
   * List of the second cycle (28 to 56 years old) numbers and VNs in the map
   */
  get secondCycleVnNumbers () {
    const cycleStart = 28
    const cycleEnd = 56

    const list =  [
      { vn: 'MO', number: this.mo },
      { vn: 'EU', number: this.eu },
      { vn: 'CD', number: this.cd },
      { vn: 'EX', number: this.ex },
      { vn: 'DM', number: this.dm },
      { vn: 'D2', number: this.d2 },
      { vn: 'C2', number: this.c2 },
    ]

    if (this.rAges.r1 >= cycleStart && this.rAges.r1 <= cycleEnd) {
      list.push({ vn: 'R1', number: this.r1 })
    }
    if (this.rAges.r2 >= cycleStart && this.rAges.r2 <= cycleEnd) {
      list.push({ vn: 'R2', number: this.r2 })
    }
    if (this.rAges.r3 >= cycleStart && this.rAges.r3 <= cycleEnd) {
      list.push({ vn: 'R3', number: this.r3 })
    }
    if (this.rAges.r3 >= cycleEnd) {
      list.push({ vn: 'R4', number: this.r4 })
    }

    return list
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers in the map
   */
  get thirdCycleNumbers () {
    return this.thirdCycleVnNumbers.map(vn => vn.number)
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers and VNs in the map
   */
  get thirdCycleVnNumbers () {
    const cycleStart = 56
    const cycleEnd = Infinity

    const list =  [
      { vn: 'MO', number: this.mo },
      { vn: 'EU', number: this.eu },
      { vn: 'CD', number: this.cd },
      { vn: 'EX', number: this.ex },
      { vn: 'DM', number: this.dm },
      { vn: 'C3', number: this.c3 },
    ]

    if (this.rAges.r1 >= cycleStart && this.rAges.r1 <= cycleEnd) {
      list.push({ vn: 'R1', number: this.r1 })
    }
    if (this.rAges.r2 >= cycleStart && this.rAges.r2 <= cycleEnd) {
      list.push({ vn: 'R2', number: this.r2 })
    }
    if (this.rAges.r3 >= cycleStart && this.rAges.r3 <= cycleEnd) {
      list.push({ vn: 'R3', number: this.r3 })
    }
    if (this.rAges.r3 >= cycleEnd) {
      list.push({ vn: 'R4', number: this.r4 })
    }

    return list
  }

  /**
   * List of unique numbers in the map
   */
  get uniqueNumbers () {
    return _array.unique(this.numbers).sort()
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

  #getInterestYear () {
    
    const day       = this.birthday.getDate()
    const month     = this.birthday.getMonth()
    const year      = new Date().getFullYear()
    
    const birthdayThisYear = new Date(year, month, day)
    const today = new Date()

    const timeDiff = birthdayThisYear.getTime() - today.getTime()
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

    const hasPassed = diffDays > 0 ? false : true

    // log.info('diffDays', diffDays, hasPassed);
    const interestYear = hasPassed ? year : year - 1

    const start = new Date(year, month, day)
    const end = new Date(interestYear + 1, month, day)
    const value = this.#getCharactersSum(this.#daySum + this.#monthSum + interestYear, true)

    return {
      value,
      start,
      end,
    }
  }
}
