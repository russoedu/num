import { _array } from '../_helpers/_array'
import { _date } from '../_helpers/_date'
import { _name } from '../_helpers/_name'
import { FinalSingleDigitT, SingleDigitT, consonants, vowels, Consonants, Vowels, letterValues, VN, VnCountSingleDigit, VnCountFinalDigit, CyclesT, PersonalYearT } from '../_helpers/types'

export class NumericMap {
  constructor (name: string, birthday: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')

    this.name = _name.normalise(name)
    const [year, month, day] = birthday.split('-').map(d => Number(d))
    this.birthday = { year, month, day }

    this.age = this.#age()

    this.#daySum = this.#charactersSum(this.birthday.day)
    this.#monthSum = this.#charactersSum(this.birthday.month)
    this.#yearSum = this.#charactersSum(this.birthday.year)
    
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

    this.tec0Cycles = {
      c1End:  28,
      c2End:  56,
      c3End:  Math.max(76, this.age * 2),
      r1End:  this.rAges.r1,
      r2End:  this.rAges.r2,
      r3End:  this.rAges.r3,
      age:    this.age,
      cycle:  this.cycle.index,
      cycles: [
        {
          name: 'Fixas',
          vns:  this.fixedVNsPosition,
        },
        {
          name: '1º Ciclo (0/28 anos)',
          vns:  this.firstCycleOnlyVNsPosition,
        },
        {
          name: '2º Ciclo (28/56 anos)',
          vns:  this.secondCycleOnlyVNsPosition,
        },
        {
          name: '3º Ciclo (+ 56 anos)',
          vns:  this.thirdCycleOnlyVNsPosition,
        },
      ],
    }
  }

  /**
   * List of numbers in the map
   */
  get vns () {
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
    ] as FinalSingleDigitT[]
  }

  /**
   * List of VNs and numbers in the map
   */
  get vnsPosition () {
    return  [
      { position: 'MO', vn: this.mo },
      { position: 'EU', vn: this.eu },
      { position: 'CD', vn: this.cd },
      { position: 'EX', vn: this.ex },
      { position: 'D1', vn: this.d1 },
      { position: 'D2', vn: this.d2 },
      { position: 'DM', vn: this.dm },
      { position: 'C1', vn: this.c1 },
      { position: 'C2', vn: this.c2 },
      { position: 'C3', vn: this.c3 },
      { position: 'R1', vn: this.r1 },
      { position: 'R2', vn: this.r2 },
      { position: 'R3', vn: this.r3 },
      { position: 'R4', vn: this.r4 },
    ] as VN[]
  }
  /**
   * List of fixed numbers in the map
   */
  get fixedVNs () {
    return  [
      this.mo,
      this.eu,
      this.cd,
      this.ex,
      this.dm,
    ] as FinalSingleDigitT[]
  }

  /**
   * List of fixed numbers in the map excluding EX
   */
  get fixedMainVNs () {
    return  [
      this.mo,
      this.eu,
      this.cd,
      this.dm,
    ] as FinalSingleDigitT[]
  }

  /**
   * List of fixed numbers and VNs in the map
   */
  get fixedVNsPosition () {
    return  [
      { position: 'MO', vn: this.mo },
      { position: 'EU', vn: this.eu },
      { position: 'CD', vn: this.cd },
      { position: 'EX', vn: this.ex },
      { position: 'DM', vn: this.dm },
    ] as VN[]
  }

  /**
   * List of fixed numbers and VNs in the map excluding EX
   */
  get fixedMainVNsPosition () {
    return  [
      { position: 'MO', vn: this.mo },
      { position: 'EU', vn: this.eu },
      { position: 'CD', vn: this.cd },
      { position: 'DM', vn: this.dm },
    ] as VN[]
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers and VNs in the map
   */
  get firstCycleVNsPosition () {
    const cycleStart = 0
    const cycleEnd = 28

    const list =  [
      ...this.fixedVNsPosition,
      { position: 'D1', vn: this.d1 },
      { position: 'C1', vn: this.c1 },
      ...this.#getCycleList(cycleStart, cycleEnd),
    ] as VN[]

    return list
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers and VNs in the map, excluding the fixed ones
   */
  get firstCycleOnlyVNsPosition () {
    const cycleStart = 0
    const cycleEnd = 28

    const list =  [
      { position: 'D1', vn: this.d1 },
      { position: 'C1', vn: this.c1 },
      ...this.#getCycleList(cycleStart, cycleEnd),
    ] as VN[]

    return list
  }

  /**
   * List of the second cycle (28 to 56 years old) numbers and VNs in the map
   */
  get secondCycleVNsPosition () {
    const cycleStart = 28
    const cycleEnd = 56

    const list =  [
      ...this.fixedVNsPosition,
      { position: 'D2', vn: this.d2 },
      { position: 'C2', vn: this.c2 },
      ...this.#getCycleList(cycleStart, cycleEnd),
    ] as VN[]

    return list
  }

  /**
   * List of the second cycle (28 to 56 years old) numbers and VNs in the map, excluding the fixed ones
   */
  get secondCycleOnlyVNsPosition () {
    const cycleStart = 28
    const cycleEnd = 56

    const list =  [
      { position: 'D2', vn: this.d2 },
      { position: 'C2', vn: this.c2 },
      ...this.#getCycleList(cycleStart, cycleEnd),
    ] as VN[]

    return list
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers and VNs in the map
   */
  get thirdCycleVNsPosition () {
    const cycleStart = 56
    const cycleEnd = Infinity

    const list =  [
      ...this.fixedVNsPosition,
      { position: 'C3', vn: this.c3 },
      ...this.#getCycleList(cycleStart, cycleEnd),
    ] as VN[]
    
    return list
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers and VNs in the map, excluding the fixed ones
   */
  get thirdCycleOnlyVNsPosition () {
    const cycleStart = 56
    const cycleEnd = Infinity

    const list =  [
      { position: 'C3', vn: this.c3 },
      ...this.#getCycleList(cycleStart, cycleEnd),
    ] as VN[]
    
    return list
  }

  /**
   * The list of VNs in the cycle
   * @param cycleStart - The start of the life cycle
   * @param cycleEnd - The end of the life cycle
   * @returns The list of VNs
   */
  #getCycleList (cycleStart: number, cycleEnd: number) {
    const r0 = 0
    const list: VN[] = []

    if ((r0 >= cycleStart && r0 < cycleEnd) ||
    (this.rAges.r1 > cycleStart && this.rAges.r1 <= cycleEnd)) {
      list.push({ position: 'R1', vn: this.r1 })
    }

    if ((this.rAges.r1 >= cycleStart && this.rAges.r1 < cycleEnd) ||
    (this.rAges.r2 > cycleStart && this.rAges.r2 <= cycleEnd)) {
      list.push({ position: 'R2', vn: this.r2 })
    }

    if ((this.rAges.r2 >= cycleStart && this.rAges.r2 < cycleEnd) ||
    (this.rAges.r3 > cycleStart && this.rAges.r3 <= cycleEnd)) {
      list.push({ position: 'R3', vn: this.r3 })
    }

    if ((this.rAges.r3 >= cycleStart && this.rAges.r3 < cycleEnd) ||
    this.rAges.r3 <= cycleEnd){
      list.push({ position: 'R4', vn: this.r4 })
    }

    return list
  }
  
  /**
   * List of the first cycle (0 to 28 years old) numbers in the map
   */
  get firstCycleVNs () {
    return this.firstCycleVNsPosition.map(vnp => vnp.vn)
  }
  
  /**
   * List of the second cycle (28 to 56 years old) numbers in the map
   */
  get secondCycleVNs () {
    return this.secondCycleVNsPosition.map(vnp => vnp.vn)

  }
  
  /**
   * List of the third cycle (28 to 56 years old) numbers in the map
   */
  get thirdCycleVNs () {
    return this.thirdCycleVNsPosition.map(vnp => vnp.vn)
  }

  /**
   * The current cycle and its numbers
   */
  get cycle () {
    if (this.age < 28) {
      return {
        cycle:     '1º Ciclo - 0/28 anos',
        index:     1,
        vnNumbers: this.firstCycleVNsPosition,
      }
    } else if (this.age < 56) {
      return {
        cycle:     '2º Ciclo - 28/56 anos',
        index:     2,
        vnNumbers: this.secondCycleVNsPosition,
      } 
    } else {
      return {
        cycle:     '3º Ciclo - + 56 anos',
        index:     3,
        vnNumbers: this.thirdCycleVNsPosition,
      }
    }
  }
  /**
   * List of unique numbers in the map
   */
  get uniqueVNs () {
    return _array.unique(this.vns)
  }

  /**
   * The amount of each number (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)
   */
  get singleDigitCount () {
    const count: VnCountSingleDigit[] = [
      { vn: 1, ...this.digitCount(1) },
      { vn: 2, ...this.digitCount([2, 11]) },
      { vn: 3, ...this.digitCount(3) },
      { vn: 4, ...this.digitCount([4, 22]) },
      { vn: 5, ...this.digitCount(5) },
      { vn: 6, ...this.digitCount(6) },
      { vn: 7, ...this.digitCount(7) },
      { vn: 8, ...this.digitCount(8) },
      { vn: 9, ...this.digitCount(9) },
    ]

    return count
  }

  /**
   * The amount of each number (0 | 1 | 2 | 11 | 3 | 4 | 22 | 5 | 6 | 7 | 8 | 9)
   */
  get finalDigitCount () {
    const count: VnCountFinalDigit[] = [
      { vn: 1, ...this.digitCount(1) },
      { vn: 2, ...this.digitCount(2) },
      { vn: 11, ...this.digitCount(11) },
      { vn: 3, ...this.digitCount(3) },
      { vn: 4, ...this.digitCount(4) },
      { vn: 22, ...this.digitCount(22) },
      { vn: 5, ...this.digitCount(5) },
      { vn: 6, ...this.digitCount(6) },
      { vn: 7, ...this.digitCount(7) },
      { vn: 8, ...this.digitCount(8) },
      { vn: 9, ...this.digitCount(9) },
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
    const matchingPositions: string[] = this.vnsPosition
      .filter(vn => num.includes(vn.vn))
      .map(vn =>vn.position)

    const singleDigitCount: { positions: string[], count: number } = { positions: [], count: 0 }

    for (const position of matchingPositions) {
      singleDigitCount.positions.push(position)
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

    let years = (otherDate.getFullYear() - this.birthday.year)

    if (otherDate.getMonth() < this.birthday.month - 1 || 
        otherDate.getMonth() == this.birthday.month - 1 && otherDate.getDate() < this.birthday.day) {
      years--
    }

    return years
  }

  #interestYear () {
    const day       = this.birthday.day
    const month     = this.birthday.month - 1
    const year      = new Date().getFullYear()
    
    const birthdayThisYear = new Date(year, month, day)

    const interestYear = new Date() >= birthdayThisYear ? year : year - 1

    const start = new Date(interestYear, month, day)
    const end = new Date(interestYear + 1, month, day)
    const vn = this.#charactersSum(
      this.#daySum +
      this.#monthSum + 
      this.#charactersSum(interestYear),
      true)

    return {
      vn,
      start,
      end,
    } as PersonalYearT
  }

  name: string
  birthday: {
    day: number,
    month: number,
    year: number
  }

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
  personalYear: PersonalYearT

  /**
   * Cycles data
   */
  tec0Cycles: CyclesT

  #daySum: number
  #monthSum: number
  #yearSum: number
}
