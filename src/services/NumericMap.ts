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

    this.mo = this.#countName(vowelsInName)
    this.eu = this.#countName(consonantsInName)
    this.ex = _number.sum(this.mo + this.eu, true)

    this.cd = _number.sum(this.#daySum + this.#monthSum + this.#yearSum, true)
    
    this.c1 = _number.sum(this.#monthSum)
    this.c2 = _number.sum(this.#daySum)
    this.c3 = _number.sum(this.#yearSum)
    
    this.d1 = _number.sum(Math.abs(this.#daySum - this.#monthSum))
    this.d2 = _number.sum(Math.abs(this.#yearSum - this.#monthSum))
    this.dm = _number.sum(Math.abs(this.d1 - this.d2))

    this.challenges = this.#challenges(this.d1, this.d2, this.dm)
    this.achievements = this.#achievements()

    this.personalYear = this.#interestYear()

    this.tec0Cycles = {
      c1End:  28,
      c2End:  56,
      c3End:  Math.max(76, this.age * 2),
      r1End:  this.achievements.r1.end,
      r2End:  this.achievements.r2.end,
      r3End:  this.achievements.r3.end,
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
      this.achievements.r1.vn,
      this.achievements.r2.vn,
      this.achievements.r3.vn,
      this.achievements.r4.vn,
    ] as VN[]
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
      { position: 'R1', vn: this.achievements.r1.vn },
      { position: 'R2', vn: this.achievements.r2.vn },
      { position: 'R3', vn: this.achievements.r3.vn },
      { position: 'R4', vn: this.achievements.r4.vn },
    ] as VnPositionT[]
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
    ] as VN[]
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
    ] as VN[]
  }

  /**
   * List of fixed numbers and VNs in the map
   */
  get fixedVNsPosition () {
    return  [
      { position: 'MO', vn: this.mo, start: 0, end: Infinity },
      { position: 'EU', vn: this.eu, start: 0, end: Infinity },
      { position: 'CD', vn: this.cd, start: 0, end: Infinity },
      { position: 'EX', vn: this.ex, start: 0, end: Infinity },
      { position: 'DM', vn: this.dm, start: 0, end: Infinity },
    ] as VnPositionCycleT[]
  }

  /**
   * List of fixed numbers and VNs in the map excluding EX
   */
  get fixedMainVNsPosition () {
    return  [
      { position: 'MO', vn: this.mo, start: 0, end: Infinity },
      { position: 'EU', vn: this.eu, start: 0, end: Infinity },
      { position: 'CD', vn: this.cd, start: 0, end: Infinity },
      { position: 'DM', vn: this.dm, start: 0, end: Infinity },
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
      { position: 'D1', vn: this.d1, start, end },
      { position: 'C1', vn: this.c1, start, end },
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
      { position: 'D1', vn: this.d1, start, end },
      { position: 'C1', vn: this.c1, start, end },
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
      { position: 'D2', vn: this.d2, start, end },
      { position: 'C2', vn: this.c2, start, end },
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
      { position: 'D2', vn: this.d2, start, end },
      { position: 'C2', vn: this.c2, start, end },
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
      { position: 'C3', vn: this.c3, start, end },
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
      { position: 'C3', vn: this.c3, start, end },
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
   * The list of achievements in the cycle
   * @param cycleStart - The start of the life cycle
   * @param cycleEnd - The end of the life cycle
   * @returns The list of VNs
   */
  achievementCycleList (cycleStart: number, cycleEnd: number) {
    const list: VnPositionCycleT[] = this.achievementCycleListExtra(cycleStart, cycleEnd)
      .map(v => ({
        position: v.position,
        vn:       v.vn,
        start:    cycleStart,
        end:      cycleEnd,
      }))

    return list
  }

  /**
   * The list of achievements in the cycle and the start and end of the cycle
   * @param cycleStart - The start of the life cycle
   * @param cycleEnd - The end of the life cycle
   * @returns The list of VNs
   */
  achievementCycleListExtra (cycleStart: number, cycleEnd: number) {
    const list: VnPositionCycleT[] = []

    if ((this.achievements.r1.start >= cycleStart && this.achievements.r1.start < cycleEnd) ||
    (this.achievements.r1.end > cycleStart && this.achievements.r1.end <= cycleEnd)) {
      list.push({
        position: 'R1',
        vn:       this.achievements.r1.vn,
        start:    Math.max(this.achievements.r1.start, cycleStart),
        end:      Math.min(this.achievements.r1.end, cycleEnd),
      })
    }

    if ((this.achievements.r2.start >= cycleStart && this.achievements.r2.start < cycleEnd) ||
    (this.achievements.r2.end > cycleStart && this.achievements.r2.end <= cycleEnd)) {
      list.push({
        position: 'R2',
        vn:       this.achievements.r2.vn,
        start:    Math.max(this.achievements.r2.start, cycleStart),
        end:      Math.min(this.achievements.r2.end, cycleEnd),
      })
    }

    if ((this.achievements.r3.start >= cycleStart && this.achievements.r3.start < cycleEnd) ||
    (this.achievements.r3.end > cycleStart && this.achievements.r3.end <= cycleEnd)) {
      list.push({
        position: 'R3',
        vn:       this.achievements.r3.vn,
        start:    Math.max(this.achievements.r3.start, cycleStart),
        end:      Math.min(this.achievements.r3.end, cycleEnd),
      })
    }

    if ((this.achievements.r4.start >= cycleStart && this.achievements.r4.start < cycleEnd) ||
    (this.achievements.r4.end > cycleStart && this.achievements.r4.start <= cycleEnd)){
      list.push({
        position: 'R4',
        vn:       this.achievements.r4.vn,
        start:    Math.max(this.achievements.r4.start, cycleStart),
        end:      Math.min(this.achievements.r4.end, cycleEnd),
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
   * @param d1 - The 1st challenge
   * @param d2 - The 2nd challenge
   * @param dm - The main challenge
   * @returns The list of challenges
   */
  #challenges (d1: SingleDigitVN, d2: SingleDigitVN, dm: SingleDigitVN) {
    const challenges = {
      d1: {
        vn:    d1,
        start: 0,
        end:   28,
      },
      d2: {
        vn:    d2,
        start: 28,
        end:   56,
      },
      dm: {
        vn:    dm,
        start: 56,
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
    const rAge = 36 - this.cd
    const r1 = _number.sum(this.#daySum + this.#monthSum, true)
    const r2 = _number.sum(this.#daySum + this.#yearSum, true)
    const r3 = _number.sum(r1 + r2, true)
    const r4 = _number.sum(this.#monthSum + this.#yearSum, true)

    const achievements = {
      r1: {
        vn:    r1,
        start: 0,
        end:   rAge,
      },
      r2: {
        vn:    r2,
        start: rAge,
        end:   rAge + 10,
      },
      r3: {
        vn:    r3,
        start: rAge + 10,
        end:   rAge + 20,
      },
      r4: {
        vn:    r4,
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
  mo: VN = 0
  /**
   * CAMINHO DO DESTINO – O QUE VEIO FAZER / REALIZAR
   */
  cd: VN = 0
  /**
   * EU ÍNTIMO – SONHO – O QUE QUER NA VIDA
   */
  eu: VN = 0
  /**
   * EXPRESSÃO – O QUE APARENTA SER
   */
  ex: VN = 0
  /**
   * PRIMEIRO DESAFIO
   */
  d1: SingleDigitVN = 0
  /**
   * DESAFIOS
   */
  challenges: {
    d1: {
        vn: SingleDigitVN;
        start: number;
        end: number;
    };
    d2: {
        vn: SingleDigitVN;
        start: number;
        end: number;
    };
    dm: {
        vn: SingleDigitVN;
        start: number;
        end: number;
    };
  }
  /**
   * SEGUNDO DESAFIO
   */
  d2: SingleDigitVN = 0
  /**
   * DESAFIO MAIOR – O QUE VEIO APRENDER COM DIFICULDADE
   */
  dm: SingleDigitVN = 0
  /**
   * PRIMEIRO CICLO
   */
  c1: SingleDigitVN = 0
  /**
   * SEGUNDO CICLO
   */
  c2: SingleDigitVN = 0
  /**
   * TERCEIRO CICLO
   */
  c3: SingleDigitVN = 0
  
  /**
   * REALIZAÇÕES
   */
  achievements: {
    r1: {
      vn:VN,
      start: number,
      end: number
    },
    r2: {
      vn:VN,
      start: number,
      end: number
    },
    r3: {
      vn:VN,
      start: number,
      end: number
    },
    r4: {
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
