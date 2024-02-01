import { _array } from '../helpers/_array'
import { _date } from '../helpers/_date'
import { _name } from '../helpers/_name'
import { _number } from '../helpers/_number'
import { Consonants, CyclesT, PersonalYearT, PositionT, VN, VnCountFinalDigit, VnCountSingleDigit, VnPositionCycleT, VnPositionT, SingleDigitVN, Vowels, consonants, letterValues, vowels } from '../helpers/types'

export class NumericMap {
  constructor (name: string, birthday: string, today: string) {
    if (!_date.isValid(birthday)) throw new Error('birthday is not a valid date')
    if (!_date.isValid(today)) throw new Error('today is not a valid date')

    this.name = _name.normalise(name)
    const [birthdayYear, birthdayMonth, birthdayDay] = birthday.split('-').map(d => Number(d))
    this.birthday = { year: birthdayYear, month: birthdayMonth, day: birthdayDay }

    const [todayYear, todayMonth, todayDay] = today.split('-').map(d => Number(d))
    this.today = { year: todayYear, month: todayMonth, day: todayDay }

    this.age = this.#age()

    this.#daySum = _number.sum(this.birthday.day)
    this.#monthSum = _number.sum(this.birthday.month)
    this.#yearSum = _number.sum(this.birthday.year)
    
    const { vowelsInName, consonantsInName } = this.#lettersInName()

    this.MO = this.#countName(vowelsInName)
    this.EU = this.#countName(consonantsInName)
    this.EX = _number.sum(this.MO + this.EU, true)

    this.CD = _number.sum(this.#daySum + this.#monthSum + this.#yearSum, true)
    
    this.C1 = _number.sum(this.#monthSum)
    this.C2 = _number.sum(this.#daySum)
    this.C3 = _number.sum(this.#yearSum)
    
    this.D1 = _number.sum(Math.abs(this.#daySum - this.#monthSum))
    this.D2 = _number.sum(Math.abs(this.#yearSum - this.#monthSum))
    this.DM = _number.sum(Math.abs(this.D1 - this.D2))

    this.challenges = this.#challenges(this.D1, this.D2, this.DM)
    this.achievements = this.#achievements()

    this.personalYear = this.#interestYear()

    this.tec0Cycles = {
      C1End:  28,
      C2End:  56,
      C3End:  Math.max(76, this.age * 2),
      R1End:  this.achievements.R1.end,
      R2End:  this.achievements.R2.end,
      R3End:  this.achievements.R3.end,
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
      this.MO,
      this.EU,
      this.CD,
      this.EX,
      this.D1,
      this.D2,
      this.DM,
      this.C1,
      this.C2,
      this.C3,
      this.achievements.R1.vn,
      this.achievements.R2.vn,
      this.achievements.R3.vn,
      this.achievements.R4.vn,
    ] as VN[]
  }

  /**
   * List of VNs and numbers in the map
   */
  get vnsPosition () {
    return  [
      { position: 'MO', vn: this.MO },
      { position: 'EU', vn: this.EU },
      { position: 'CD', vn: this.CD },
      { position: 'EX', vn: this.EX },
      { position: 'D1', vn: this.D1 },
      { position: 'D2', vn: this.D2 },
      { position: 'DM', vn: this.DM },
      { position: 'C1', vn: this.C1 },
      { position: 'C2', vn: this.C2 },
      { position: 'C3', vn: this.C3 },
      { position: 'R1', vn: this.achievements.R1.vn },
      { position: 'R2', vn: this.achievements.R2.vn },
      { position: 'R3', vn: this.achievements.R3.vn },
      { position: 'R4', vn: this.achievements.R4.vn },
    ] as VnPositionT[]
  }
  /**
   * List of fixed numbers in the map
   */
  get fixedVNs () {
    return  [
      this.MO,
      this.EU,
      this.CD,
      this.EX,
      this.DM,
    ] as VN[]
  }

  /**
   * List of fixed numbers in the map excluding EX
   */
  get fixedMainVNs () {
    return  [
      this.MO,
      this.EU,
      this.CD,
      this.DM,
    ] as VN[]
  }

  /**
   * List of fixed numbers and VNs in the map
   */
  get fixedVNsPosition () {
    return  [
      { position: 'MO', vn: this.MO, start: 0, end: Infinity },
      { position: 'EU', vn: this.EU, start: 0, end: Infinity },
      { position: 'CD', vn: this.CD, start: 0, end: Infinity },
      { position: 'EX', vn: this.EX, start: 0, end: Infinity },
      { position: 'DM', vn: this.DM, start: 0, end: Infinity },
    ] as VnPositionCycleT[]
  }

  /**
   * List of fixed numbers and VNs in the map excluding EX
   */
  get fixedMainVNsPosition () {
    return  [
      { position: 'MO', vn: this.MO, start: 0, end: Infinity },
      { position: 'EU', vn: this.EU, start: 0, end: Infinity },
      { position: 'CD', vn: this.CD, start: 0, end: Infinity },
      { position: 'DM', vn: this.DM, start: 0, end: Infinity },
    ] as VnPositionCycleT[]
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers and VNs in the map
   */
  get firstCycleVNsPosition () {
    const start = 0
    const end = 28

    const list: VnPositionCycleT[] =  [
      ...this.fixedVNsPosition,
      { position: 'D1', vn: this.D1, start, end },
      { position: 'C1', vn: this.C1, start, end },
      ...this.achievementCycleList(start, end),
    ]

    return list
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers and VNs in the map, excluding the fixed ones
   */
  get firstCycleOnlyVNsPosition () {
    const start = 0
    const end = 28

    const list: VnPositionCycleT[] =  [
      { position: 'D1', vn: this.D1, start, end },
      { position: 'C1', vn: this.C1, start, end },
      ...this.achievementCycleList(start, end),
    ]

    return list
  }

  /**
   * List of the first cycle (0 to 28 years old) numbers in the map
   */
  get firstCycleVNs () {
    return this.firstCycleVNsPosition.map(vnp => vnp.vn)
  }

  /**
   * List of the second cycle (28 to 56 years old) numbers and VNs in the map
   */
  get secondCycleVNsPosition () {
    const start = 28
    const end = 56

    const list: VnPositionCycleT[] =  [
      ...this.fixedVNsPosition,
      { position: 'D2', vn: this.D2, start, end },
      { position: 'C2', vn: this.C2, start, end },
      ...this.achievementCycleList(start, end),
    ]

    return list
  }

  /**
   * List of the second cycle (28 to 56 years old) numbers and VNs in the map, excluding the fixed ones
   */
  get secondCycleOnlyVNsPosition () {
    const start = 28
    const end = 56

    const list: VnPositionCycleT[] =  [
      { position: 'D2', vn: this.D2, start, end },
      { position: 'C2', vn: this.C2, start, end },
      ...this.achievementCycleList(start, end),
    ]

    return list
  }

  /**
   * List of the second cycle (28 to 56 years old) numbers in the map
   */
  get secondCycleVNs () {
    return this.secondCycleVNsPosition.map(vnp => vnp.vn)
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers and VNs in the map
   */
  get thirdCycleVNsPosition () {
    const start = 56
    const end = Infinity

    const list: VnPositionCycleT[] =  [
      ...this.fixedVNsPosition,
      { position: 'C3', vn: this.C3, start, end },
      ...this.achievementCycleList(start, end),
    ]
    
    return list
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers and VNs in the map, excluding the fixed ones
   */
  get thirdCycleOnlyVNsPosition () {
    const start = 56
    const end = Infinity

    const list: VnPositionCycleT[] =  [
      { position: 'C3', vn: this.C3, start, end },
      ...this.achievementCycleList(start, end),
    ]
    
    return list
  }

  /**
   * List of the third cycle (28 to 56 years old) numbers in the map
   */
  get thirdCycleVNs () {
    return this.thirdCycleVNsPosition.map(vnp => vnp.vn)
  }

  /**
   * List of all cycles numbers and VNs in the map
   */
  get allCyclesVNsPosition () {
    const start = 0
    const end = Infinity

    const list: VnPositionCycleT[] =  [
      ...this.fixedVNsPosition,
      { position: 'C1', vn: this.C1, start: 0, end: 28 },
      { position: 'C2', vn: this.C2, start: 28, end: 56 },
      { position: 'C3', vn: this.C3, start: 56, end: Infinity },
      { position: 'D1', vn: this.D1, start: 0, end: 28 },
      { position: 'D2', vn: this.D2, start: 28, end: 56 },
      ...this.achievementCycleList(start, end),
    ]
    
    return list
  }
  /**
   * The list of achievements in the cycle and the start and end of the cycle
   * @param cycleStart - The start of the life cycle
   * @param cycleEnd - The end of the life cycle
   * @returns The list of VNs
   */
  achievementCycleList (cycleStart: number, cycleEnd: number) {
    const list: VnPositionCycleT[] = []

    if ((this.achievements.R1.start >= cycleStart && this.achievements.R1.start < cycleEnd) ||
    (this.achievements.R1.end > cycleStart && this.achievements.R1.end <= cycleEnd)) {
      list.push({
        position: 'R1',
        vn:       this.achievements.R1.vn,
        start:    Math.max(this.achievements.R1.start, cycleStart),
        end:      Math.min(this.achievements.R1.end, cycleEnd),
      })
    }

    if ((this.achievements.R2.start >= cycleStart && this.achievements.R2.start < cycleEnd) ||
    (this.achievements.R2.end > cycleStart && this.achievements.R2.end <= cycleEnd)) {
      list.push({
        position: 'R2',
        vn:       this.achievements.R2.vn,
        start:    Math.max(this.achievements.R2.start, cycleStart),
        end:      Math.min(this.achievements.R2.end, cycleEnd),
      })
    }

    if ((this.achievements.R3.start >= cycleStart && this.achievements.R3.start < cycleEnd) ||
    (this.achievements.R3.end > cycleStart && this.achievements.R3.end <= cycleEnd)) {
      list.push({
        position: 'R3',
        vn:       this.achievements.R3.vn,
        start:    Math.max(this.achievements.R3.start, cycleStart),
        end:      Math.min(this.achievements.R3.end, cycleEnd),
      })
    }

    if ((this.achievements.R4.start >= cycleStart && this.achievements.R4.start < cycleEnd) ||
    (this.achievements.R4.end > cycleStart && this.achievements.R4.start <= cycleEnd)){
      list.push({
        position: 'R4',
        vn:       this.achievements.R4.vn,
        start:    Math.max(this.achievements.R4.start, cycleStart),
        end:      Math.min(this.achievements.R4.end, cycleEnd),
      })
    }

    return list
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
   * The achievements compiled into an array
   */
  get achievementsArray () {
    return Object.entries(this.achievements).map(achievement => achievement[1])
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
      { vn: 1, ...this.vnCount(1) },
      { vn: 2, ...this.vnCount([2, 11]) },
      { vn: 3, ...this.vnCount(3) },
      { vn: 4, ...this.vnCount([4, 22]) },
      { vn: 5, ...this.vnCount(5) },
      { vn: 6, ...this.vnCount(6) },
      { vn: 7, ...this.vnCount(7) },
      { vn: 8, ...this.vnCount(8) },
      { vn: 9, ...this.vnCount(9) },
    ]

    return count
  }

  /**
   * The amount of each number (0 | 1 | 2 | 11 | 3 | 4 | 22 | 5 | 6 | 7 | 8 | 9)
   */
  get finalDigitCount () {
    const count: VnCountFinalDigit[] = [
      { vn: 1, ...this.vnCount(1) },
      { vn: 2, ...this.vnCount(2) },
      { vn: 11, ...this.vnCount(11) },
      { vn: 3, ...this.vnCount(3) },
      { vn: 4, ...this.vnCount(4) },
      { vn: 22, ...this.vnCount(22) },
      { vn: 5, ...this.vnCount(5) },
      { vn: 6, ...this.vnCount(6) },
      { vn: 7, ...this.vnCount(7) },
      { vn: 8, ...this.vnCount(8) },
      { vn: 9, ...this.vnCount(9) },
    ]

    return count
  }

  /**
   * The amount of each number and the list of VNs
   * @param number - The number or numbers to be counted
   * @returns The amount of each number
   */
  vnCount (number: VN|VN[]) {
    const num = typeof number === 'number' ? [number] : number
    const matchingPositions: PositionT[] = this.vnsPosition
      .filter(vn => num.includes(vn.vn))
      .map(vn =>vn.position)

    const singleDigitCount: { positions: PositionT[], count: number } = { positions: [], count: 0 }

    for (const position of matchingPositions) {
      singleDigitCount.positions.push(position)
      singleDigitCount.count++
    }

    return singleDigitCount
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

    return _number.sum(nameSum, true)
  }

  /**
   * The list of challenges with the VN, start and end
   * @param D1 - The 1st challenge
   * @param D2 - The 2nd challenge
   * @param DM - The main challenge
   * @returns The list of challenges
   */
  #challenges (D1: SingleDigitVN, D2: SingleDigitVN, DM: SingleDigitVN) {
    const challenges = {
      D1: {
        vn:    D1,
        start: 0,
        end:   28,
      },
      D2: {
        vn:    D2,
        start: 28,
        end:   56,
      },
      DM: {
        vn:    DM,
        start: 0,
        end:   Infinity,
      },
    }

    return challenges
  }

  /**
   * The list of achievements with the VN, start and end
   * @returns The list of achievements
   */
  #achievements () {
    const rAge = 36 - this.CD
    const R1 = _number.sum(this.#daySum + this.#monthSum, true)
    const R2 = _number.sum(this.#daySum + this.#yearSum, true)
    const R3 = _number.sum(R1 + R2, true)
    const R4 = _number.sum(this.#monthSum + this.#yearSum, true)

    const achievements = {
      R1: {
        vn:    R1,
        start: 0,
        end:   rAge,
      },
      R2: {
        vn:    R2,
        start: rAge,
        end:   rAge + 10,
      },
      R3: {
        vn:    R3,
        start: rAge + 10,
        end:   rAge + 20,
      },
      R4: {
        vn:    R4,
        start: rAge + 20,
        end:   Infinity,
      },
    }

    return achievements
  }

  /**
   * Retrieves the current age depending on the current day
   * @returns The current age
   */
  #age () {
    const month = this.today.month

    let years = (this.today.year - this.birthday.year)

    if (month < this.birthday.month || 
        month == this.birthday.month && this.today.day < this.birthday.day) {
      years--
    }

    return years
  }

  #interestYear () {
    const day       = this.birthday.day
    const month     = this.birthday.month - 1
    const year      = this.today.year
    
    const birthdayThisYear = new Date(year, month, day)
    const today = new Date(year, this.today.month - 1, this.today.day)
    
    const interestYear = today >= birthdayThisYear ? year : year - 1

    const start = new Date(interestYear, month, day)
    const end = new Date(interestYear + 1, month, day)
    const vn = _number.sum(
      this.#daySum +
      this.#monthSum + 
      _number.sum(interestYear),
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

  today:  {
    day: number,
    month: number,
    year: number
  }
  
  /**
   * MOTIVAÇÃO – ALMA /PERSONALIDADE – QUEM É
   */
  MO: VN = 0
  /**
   * CAMINHO DO DESTINO – O QUE VEIO FAZER / REALIZAR
   */
  CD: VN = 0
  /**
   * EU ÍNTIMO – SONHO – O QUE QUER NA VIDA
   */
  EU: VN = 0
  /**
   * EXPRESSÃO – O QUE APARENTA SER
   */
  EX: VN = 0
  /**
   * PRIMEIRO DESAFIO
   */
  D1: SingleDigitVN = 0
  /**
   * DESAFIOS
   */
  challenges: {
    D1: {
        vn: SingleDigitVN;
        start: number;
        end: number;
    };
    D2: {
        vn: SingleDigitVN;
        start: number;
        end: number;
    };
    DM: {
        vn: SingleDigitVN;
        start: number;
        end: number;
    };
  }
  /**
   * SEGUNDO DESAFIO
   */
  D2: SingleDigitVN = 0
  /**
   * DESAFIO MAIOR – O QUE VEIO APRENDER COM DIFICULDADE
   */
  DM: SingleDigitVN = 0
  /**
   * PRIMEIRO CICLO
   */
  C1: SingleDigitVN = 0
  /**
   * SEGUNDO CICLO
   */
  C2: SingleDigitVN = 0
  /**
   * TERCEIRO CICLO
   */
  C3: SingleDigitVN = 0
  
  /**
   * REALIZAÇÕES
   */
  achievements: {
    R1: {
      vn:VN,
      start: number,
      end: number
    },
    R2: {
      vn:VN,
      start: number,
      end: number
    },
    R3: {
      vn:VN,
      start: number,
      end: number
    },
    R4: {
      vn:VN,
      start: number,
      end: number
    }
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