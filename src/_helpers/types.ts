import { PaletteMode } from '@mui/material'

export enum MainView {
  MAP,
  CYCLE
}
export const appName = 'Numerologia Pitagórica 2.0.0'

export const purple = '#894fd6'
export type ThemeT = {
  mode:         PaletteMode,
  highContrast: boolean,
  colour:       string,
  width:        number,
  height:       number,
}

export enum Cycle {
  FIXED = 'Fixas',
  FIRST = '1º Ciclo (0/28 anos)',
  SECOND = '2º Ciclo (28/56 anos)',
  THIRD = '3º Ciclo (+ 56 anos)',
}

export type FormInput = {
  name: [string, React.Dispatch<React.SetStateAction<string>>],
  birthday: [string, React.Dispatch<React.SetStateAction<string>>],
  calculate: (clean?: boolean) => void
}

export type SingleDigitT = 0|1|2|3|4|5|6|7|8|9
export type SingleDigitA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export type FinalSingleDigitT = 0|1|2|11|3|4|22|5|6|7|8|9
export type FinalSingleDigitA = [0, 1, 2, 11, 3, 4, 22, 5, 6, 7, 8, 9]


export const letterValues = {
  ' ': 0,
  A:   1, B:   2, C:   3, D:   4, E:   5, F:   6, G:   7, H:   8, I:   9,
  J:   1, K:   2, L:   3, M:   4, N:   5, O:   6, P:   7, Q:   8, R:   9,
  S:   1, T:   2, U:   3, V:   4, W:   5, X:   6, Y:   7, Z:   8,
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
  age?: string
}

export type PyramidResultT = {
  vn: FinalSingleDigitT,
  description: string,
}

export type PyramidT = {
  position: string,
  results:PyramidResultT[]
}

export type MultiplicityTypeT = 
  'D'  | // Duplicidade: a pessoa controla sozinha
  'T'  | // Triplicidade: a pessoa precisa de orientação
  'Qd' | // Quadruplicidade: a pessoa necessita de orientação
  'Qt'  // Quintuplicidade: a pessoa necessita de orientação


export const MultiplicityType: MultiplicityTypeT[] = [
  'D',
  'T',
  'Qd',
  'Qt',
]

export type PersonalYearT = {
  vn: FinalSingleDigitT,
  start: Date,
  end:   Date,
}

export type MultiplicityMultipleT = {
  vn: FinalSingleDigitT,
  positions: string[]
  type: MultiplicityTypeT
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
export const FixedPositions = [
  'MO',
  'EU',
  'CD',
  'EX',
  'DM',
]

export type VN = {
  vn: FinalSingleDigitT,
  position: string,
}

export type VnCountSingleDigit = {
  vn: SingleDigitT,
  positions: string[],
  count: number,
}

export type VnCountFinalDigit = {
  vn: FinalSingleDigitT,
  positions: string[],
  count: number,
}

export enum Relation {
  'ADORACAO_EU' = 'Adoração e identificação',
  'FORTISSIMA_C1' = 'Identificação',
  'FORTE_MO' = 'Igualdade, grande aproximação',
  'MEDIA_CD_R1' = 'Aproximação',
  'DIFICULDADE_D1_DM' = 'Dificuldade',
  'AUSENCIA' = 'Não previsto convívio significativo',
}

export enum Person {
  'PAI' = 'do pai',
  'MAE' = 'da mãe',
  'IRMAO' = 'dos irmãos e/ou irmãs, tios e/ou tias e primos e/ou primas',
  'AVO' = 'dos avôs e/ou avós',
}

export const CycleInterpretationVns = [
  {
    vn:     1 as SingleDigitT,
    person: Person.PAI },
  {
    vn:     2 as SingleDigitT,
    person: Person.MAE },
  {
    vn:     3 as SingleDigitT,
    person: Person.IRMAO },
  {
    vn:     4 as SingleDigitT,
    person: Person.AVO },
]

export type CycleInterpretationT = {
  relation: Relation,
  person: Person
}

export type LanguageStyleT = {
  reason: string,
  vn: FinalSingleDigitT,
  content: string,
}

export type OwnersAndPractitionersDataT = {
  vn: FinalSingleDigitT,
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
export const vnOwnerPractitioner: { [key in FinalSingleDigitT]: FinalSingleDigitT[]} = {
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
  c1End: number,
  c2End: number,
  c3End: number,
  r1End: number,
  r2End: number,
  r3End: number,
  age: number,
  cycle: number,
  cycles: {
    name: string,
    vns: VN[],
  }[]
}

export type ExpressionVibrationT = { title: string, more: string }