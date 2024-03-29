/* v8 ignore start */

import { PaletteMode } from '@mui/material'

export enum MainView {
  MAP,
  CYCLE
}
export const purple = '#894fd6'
export type ThemeT = {
  mode: PaletteMode,
  highContrast: boolean,
  colour: string,
  width: number,
  height: number,
}

export enum Cycle {
  FIXED = 'Fixas',
  FIRST = '1º Ciclo (0/28 anos)',
  SECOND = '2º Ciclo (28/56 anos)',
  THIRD = '3º Ciclo (+ 56 anos)',
}

export enum CycleType {
  FIXED = 'fixas',
  CYCLE = 'ciclos',
}

export type FormInput = {
  name: [string, React.Dispatch<React.SetStateAction<string>>],
  birthday: [string, React.Dispatch<React.SetStateAction<string>>],
  today: [string, React.Dispatch<React.SetStateAction<string>>],
  debug: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
  calculate: (clean?: boolean) => void
}

export type PositionT = 'MO'|'EU'|'CD'|'DM'|'EX'|'C1'|'C2'|'C3'|'D1'|'D2'|'R1'|'R2'|'R3'|'R4'
export type PositionA = ['MO', 'EU', 'CD', 'DM', 'EX', 'C1', 'C2', 'C3', 'D1', 'D2', 'R1', 'R2', 'R3', 'R4']
export const FixedPositions = [
  'MO',
  'EU',
  'CD',
  'EX',
  'DM',
]
export type SingleDigitVN = 0|1|2|3|4|5|6|7|8|9
export type SingleDigitA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export type VN = 0|1|2|11|3|4|22|5|6|7|8|9
export type FinalSingleDigitA = [0, 1, 2, 11, 3, 4, 22, 5, 6, 7, 8, 9]
export const difficultyVn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const restVn = [1, 2, 11, 3, 4, 22, 5, 6, 7, 8, 9]

export const letterValues = {
  ' ': 0,
  A:   1,
  B:   2,
  C:   3,
  D:   4,
  E:   5,
  F:   6,
  G:   7,
  H:   8,
  I:   9,
  J:   1,
  K:   2,
  L:   3,
  M:   4,
  N:   5,
  O:   6,
  P:   7,
  Q:   8,
  R:   9,
  S:   1,
  T:   2,
  U:   3,
  V:   4,
  W:   5,
  X:   6,
  Y:   7,
  Z:   8,
}

export enum LetterType {
  VOWEL,
  CONSONANT,
}
export const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

export type Consonants = 'B'|'C'|'D'|'F'|'G'|'H'|'J'|'K'|'L'|'M'|'N'|'P'|'Q'|'R'|'S'|'T'|'V'|'W'|'X'|'Y'|'Z'

export const vowels = ['A', 'E', 'I', 'O', 'U']
export type Vowels = 'A'|'E'|'I'|'O'|'U'

export type ResultValueT = {
  title: string,
  value: number,
  description: string,
  age?: string
}

export type DebugResultValueT = {
  title: string,
  value: [VN, React.Dispatch<React.SetStateAction<VN>>] | [SingleDigitVN, React.Dispatch<React.SetStateAction<SingleDigitVN>>],
  type: 'difficulty'|'rest',
  age?: string
}

export type PyramidResultT = {
  vn: VN,
  description: string,
}

export type PyramidT = {
  position: PositionT,
  results:PyramidResultT[]
}

export type MultiplicityTypeT =
  'D' | // Duplicidade: a pessoa controla sozinha
  'T' | // Triplicidade: a pessoa precisa de orientação
  'Qd' | // Quadruplicidade: a pessoa necessita de orientação
  'Qt' // Quintuplicidade: a pessoa necessita de orientação

export const MultiplicityType: MultiplicityTypeT[] = [
  'D',
  'T',
  'Qd',
  'Qt',
]

export type PersonalYearT = {
  vn: VN,
  start: Date,
  end: Date,
}

export type MultiplicityMultipleT = {
  vn: VN,
  positions: PositionT[]
  type: MultiplicityTypeT
  start: number,
  end: number,
}

export type MultiplicityT = {
  type: Cycle,
  multiples: MultiplicityMultipleT[]
}

export type MultiplicitesT = {
  data: MultiplicityT[],
  comments: string,
}

export type PercentageT = {
  name: string,
  value: number
}

export type PercentageResultT = {
  percentage: PercentageT[],
  result: string
}
export type PercentageResultExtraT = {
  result: string,
  percentage: PercentageT[],
  sixAlert: string
}

export type VnPositionT = {
  vn: VN,
  position: PositionT,
}

export type VnPositionCycleT = {
  vn: VN,
  position: PositionT,
  type: CycleType,
  start: number,
  end: number,
}

export type SingleDigitVnPositionCycleT = {
  vn: SingleDigitVN,
  position: PositionT,
  type: CycleType,
  start: number,
  end: number,
}

export type VnCountSingleDigit = {
  vn: SingleDigitVN,
  positions: PositionT[],
  count: number,
}

export type VnCountFinalDigit = {
  vn: VN,
  positions: PositionT[],
  count: number,
}

export enum Relation {
  'ADORACAO_EU' = 'Adoração e identificação',
  'FORTISSIMA_C1' = 'Fortíssima identificação',
  'FORTE_MO' = 'Igualdade, grande aproximação',
  'MEDIA_CD_R1' = 'Aproximação',
  'DIFICULDADE_D1_DM' = 'Dificuldade',
  'AUSENCIA' = 'Não previsto convívio significativo',
}

export const relationSortOrder = [
  Relation.ADORACAO_EU,
  Relation.FORTISSIMA_C1,
  Relation.FORTE_MO,
  Relation.MEDIA_CD_R1,
  Relation.DIFICULDADE_D1_DM,
  Relation.AUSENCIA,
]

export enum Person {
  'PAI' = 'do pai',
  'MAE' = 'da mãe',
  'IRMAO' = 'dos irmãos e/ou irmãs, tios e/ou tias e primos e/ou primas',
  'AVO' = 'dos avôs e/ou avós',
}

export const CycleInterpretationVns = [
  {
    vn:     1 as SingleDigitVN,
    person: Person.PAI,
  },
  {
    vn:     2 as SingleDigitVN,
    person: Person.MAE,
  },
  {
    vn:     3 as SingleDigitVN,
    person: Person.IRMAO,
  },
  {
    vn:     4 as SingleDigitVN,
    person: Person.AVO,
  },
]

export type FirstCycleRelationsT = {
  relation: Relation,
  person: Person
}
export type FirstCycleExtraT = {
  position: PositionT|string,
  vn: VN,
  description: string,
  obs?: string,
}
export type FirstCycleInterpretationT = {
  relations: FirstCycleRelationsT[],
  extra: FirstCycleExtraT[],
  espirituality: string,
}

export type LanguageStyleT = {
  reason: string,
  vn: VN,
  content: string,
}

export type OwnersAndPractitionersDataT = {
  vn: VN,
  percentage: number,
  support: 'pouca' | 'média' | 'muita'
}

export type RiskT = 'fraco' | 'médio' | 'forte' | 'forte - VN 11 presente'

export type VicesAndReciclerDataT = {
  name: string,
  percentage: number,
  risk: RiskT
}

export type OwnersAndPractitionersT = {
  normal: OwnersAndPractitionersDataT[]
  zeroAge?: OwnersAndPractitionersDataT[]
}
export const vnOwnerPractitioner: { [key in VN]: VN[]} = {
  0:  [],
  1:  [1, 4, 7, 8, 22],
  2:  [2, 6, 9, 11],
  3:  [3, 1, 5, 9],
  4:  [4, 1, 7, 8, 22],
  5:  [5, 1, 3, 7, 9],
  6:  [6, 2, 3, 5, 7, 9, 11, 22],
  7:  [7, 9, 11, 22],
  8:  [8, 1, 4, 7, 9, 22],
  9:  [9, 7, 11, 22],
  11: [11, 7, 9, 22],
  22: [22, 7, 9, 11],
}

export type CyclesT = {
  C1End: number,
  C2End: number,
  C3End: number,
  R1End: number,
  R2End: number,
  R3End: number,
  age: number,
  cycle: number,
  cycles: {
    name: string,
    vns: VnPositionT[],
  }[]
}

export type ExpressionVibrationT = {
  title: string,
  more: string,
  exIs3: boolean
}

export type AchievementsT = {
  position: 'CD' | 'MO' | 'EU',
  start: number,
  end: number,
}

export type ConquestsT = {
  position: 'D1' | 'D2' | 'DM',
  start: number,
  end: number,
}

export type RebirthT = {
  position: 'R2' | 'R3' | 'R4',
  age: number
}

export type StrongDecisiveMomementPositionT = {
  position: 'CD'|'D1'|'D2',
  vn: SingleDigitVN
}

export type MissingPositiveVibration = {
  position: 'D1' | 'D2' | 'DM',
  vn: VN,
  receivedAge: number,
}

export type StrongOpositionItemT = {
  pair: [VN, VN],
  message: string
}

export type StrongOpositionT = {
  pair: [VN, VN],
  message: string
  type: CycleType,
  start: number,
  end: number,
}

export type AffectivePractice = {
  vns: '2' | '6' | '2 e 6',
  message: string
  challenges: {
    vn: number
  }
}

export const espiritualityNumbers = [7, 9, 11, 22] as VN[]
/* v8 ignore end */
