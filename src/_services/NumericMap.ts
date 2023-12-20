import { _array } from '../_helpers/_array'
import { _date } from '../_helpers/_date'
import { _name } from '../_helpers/_name'
import { FinalSingleDigitT, SingleDigitT, consonants, vowels, Consonants, Vowels, letterValues } from '../_helpers/types'

export class NumericMap {
  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    this.birthday = new Date(birthday)

    this.age = this.#age()

    this.#daySum = this.#charactersSum(this.birthday.getDate())
    this.#monthSum = this.#charactersSum(this.birthday.getMonth() + 1)
    this.#yearSum = this.#charactersSum(this.birthday.getFullYear())
    
    const { vowelsInName, consonantsInName } = this.#lettersInName()

    this.mo = this.#countName(vowelsInName)
    this.eu = this.#countName(consonantsInName)
    this.ex = this.#charactersSum(this.mo + this.eu, true)

    this.cd = this.#charactersSum(this.#daySum + this.#monthSum + this.#yearSum, true)
    
    this.c1 = this.#charactersSum(this.#monthSum)
    this.c2 = this.#charactersSum(this.#daySum)
    this.c3 = this.#charactersSum(this.#yearSum)
    
    this.d1 = this.#charactersSum(Math.abs(this.#daySum - this.#monthSum))
    this.d2 = this.#charactersSum(Math.abs(this.#yearSum - this.#monthSum))
    this.dm = this.#charactersSum(Math.abs(this.d1 - this.d2))

    this.r1 = this.#charactersSum(this.#daySum + this.#monthSum, true)

    this.r2 = this.#charactersSum(this.#daySum + this.#yearSum, true)

    this.r3 = this.#charactersSum(this.r1 + this.r2, true)
    this.r4 = this.#charactersSum(this.#monthSum + this.#yearSum, true)

    this.rAges.r1 = 36 - this.cd
    this.rAges.r2 = this.rAges.r1 + 10
    this.rAges.r3 = this.rAges.r2 + 10

    this.personalYear = this.#interestYear()
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
   * List of VNs and numbers in the map
   */
  get vnNumbers () {
    return  [
      { vn: 'MO', number: this.mo },
      { vn: 'EU', number: this.eu },
      { vn: 'CD', number: this.cd },
      { vn: 'EX', number: this.ex },
      { vn: 'D1', number: this.d1 },
      { vn: 'D2', number: this.d2 },
      { vn: 'DM', number: this.dm },
      { vn: 'C1', number: this.c1 },
      { vn: 'C2', number: this.c2 },
      { vn: 'C3', number: this.c3 },
      { vn: 'R1', number: this.r1 },
      { vn: 'R2', number: this.r2 },
      { vn: 'R3', number: this.r3 },
      { vn: 'R4', number: this.r4 },
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
   * List of the first cycle (0 to 28 years old) numbers in the map
   */
  get firstCycleNumbers () {
    return this.firstCycleVnNumbers.map(vn => vn.number)
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
   * List of the second cycle (28 to 56 years old) numbers in the map
   */
  get secondCycleNumbers () {
    return this.secondCycleVnNumbers.map(vn => vn.number)

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
   * List of the third cycle (28 to 56 years old) numbers in the map
   */
  get thirdCycleNumbers () {
    return this.thirdCycleVnNumbers.map(vn => vn.number)
  }

  /**
   * The current cycle and its numbers
   */
  get cycle () {
    if (this.age < 28) {
      return {
        cycle:     '1º Ciclo - 0/28 anos',
        index:     1,
        vnNumbers: this.firstCycleVnNumbers,
      }
    } else if (this.age < 56) {
      return {
        cycle:     '2º Ciclo - 28/56 anos',
        index:     2,
        vnNumbers: this.secondCycleVnNumbers,
      } 
    } else {
      return {
        cycle:     '3º Ciclo - + 56 anos',
        index:     3,
        vnNumbers: this.thirdCycleVnNumbers,
      }
    }
  }
  /**
   * List of unique numbers in the map
   */
  get uniqueNumbers () {
    return _array.unique(this.numbers).sort()
  }

  /**
   * The amount of each number (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)
   */
  get singleDigitCount () {
    const count: { number: SingleDigitT, count: number, vns: string[] }[] = [
      { number: 1, ...this.digitCount(1) },
      { number: 2, ...this.digitCount([2, 11]) },
      { number: 3, ...this.digitCount(3) },
      { number: 4, ...this.digitCount([4, 22]) },
      { number: 5, ...this.digitCount(5) },
      { number: 6, ...this.digitCount(6) },
      { number: 7, ...this.digitCount(7) },
      { number: 8, ...this.digitCount(8) },
      { number: 9, ...this.digitCount(9) },
    ]

    return count
  }

  /**
   * The amount of each number (0 | 1 | 2 | 11 | 3 | 4 | 22 | 5 | 6 | 7 | 8 | 9)
   */
  get finalDigitCount () {
    const count: { number: FinalSingleDigitT, count: number, vns: string[] }[] = [
      { number: 1, ...this.digitCount(1) },
      { number: 2, ...this.digitCount(2) },
      { number: 11, ...this.digitCount(11) },
      { number: 3, ...this.digitCount(3) },
      { number: 4, ...this.digitCount(4) },
      { number: 22, ...this.digitCount(22) },
      { number: 5, ...this.digitCount(5) },
      { number: 6, ...this.digitCount(6) },
      { number: 7, ...this.digitCount(7) },
      { number: 8, ...this.digitCount(8) },
      { number: 9, ...this.digitCount(9) },
    ]

    return count
  }

  /**
   * The amount of each number and the list of VNs
   * @param number - The number or numbers to be counted
   * @returns The amount of each number
   */
  digitCount (number: FinalSingleDigitT|FinalSingleDigitT[]) {
    const num = typeof number === 'number' ? [number] : number
    const matchingVns: string[] = this.vnNumbers
      .filter(vn => num.includes(vn.number))
      .map(vn =>vn.vn)

    const singleDigitCount: { vns: string[], count: number } = { vns: [], count: 0 }

    for (const vn of matchingVns) {
      singleDigitCount.vns.push(vn)
      singleDigitCount.count++
    }

    return singleDigitCount
  }

  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @returns The sum of each number digit
   */
  #charactersSum (num: number): SingleDigitT
  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #charactersSum (num: number, final: false): SingleDigitT
  /**
   * Sums the digits of the number until it is a single digit (1 - 9, 11 or 22)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #charactersSum (num: number, final: true): FinalSingleDigitT
  
  /**
   * Sums the digits of the number until it is a single digit (1 - 9). If final is true, 11 and 22 are also possible
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  #charactersSum (num: number, final: boolean): FinalSingleDigitT|SingleDigitT
  
  #charactersSum (num: number, final = false) {
    let sum: any = 0

    if (num > 9 && (final !== true || (num != 11 && num != 22))) {
      while (num) {
        sum += num % 10
        num = Math.floor(num / 10)
      }

      sum = this.#charactersSum(sum, final)

    } else {
      sum = num
    }
    
    return sum
  }

  /**
   * Retrieves the name vowels and consonants extracted from the name
   */
  #lettersInName () {
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

  /**
   * Retrieves the sum of the list of letters
   * @param lettersInName - The list of vowels or consonantes in the name
   * @returns The sum of the letters
   */
  #countName (lettersInName: Consonants[]|Vowels[]) {
    let nameSum = 0

    for (let j = 0; j < lettersInName.length; j++) {
      const ch = lettersInName[j]
      const chValue = letterValues[ch]

      nameSum += chValue
    }

    return this.#charactersSum(nameSum, true)
  }

  /**
   * Retrieves the current age depending on the current day
   * @returns The current age
   */
  #age () {
    const otherDate = new Date()

    let years = (otherDate.getFullYear() - this.birthday.getFullYear())

    if (otherDate.getMonth() < this.birthday.getMonth() || 
        otherDate.getMonth() == this.birthday.getMonth() && otherDate.getDate() < this.birthday.getDate()) {
      years--
    }

    return years
  }

  #interestYear () {
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
    const value = this.#charactersSum(this.#daySum + this.#monthSum + interestYear, true)

    return {
      value,
      start,
      end,
    }
  }

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
  d1: SingleDigitT = 0
  /**
   * SEGUNDO DESAFIO
   */
  d2: SingleDigitT = 0
  /**
   * DESAFIO MAIOR – O QUE VEIO APRENDER COM DIFICULDADE
   */
  dm: SingleDigitT = 0
  /**
   * PRIMEIRO CICLO
   */
  c1: SingleDigitT = 0
  /**
   * SEGUNDO CICLO
   */
  c2: SingleDigitT = 0
  /**
   * TERCEIRO CICLO
   */
  c3: SingleDigitT = 0
  
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
    value: FinalSingleDigitT,
    start: Date,
    end:   Date,
  } = {} as any

  #daySum: number
  #monthSum: number
  #yearSum: number
}
