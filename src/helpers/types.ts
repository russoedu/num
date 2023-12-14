import { PaletteMode } from '@mui/material'

export const appName = 'Numerologia Pitagórica 2.0.0'
export type ThemeT = {
  mode:         PaletteMode,
  highContrast: boolean,
  colour:       string,
  width:        number,
  height:       number,
}

export type FormInput = {
  name: [string, React.Dispatch<React.SetStateAction<string>>],
  birthday: [string, React.Dispatch<React.SetStateAction<string>>],
  hasResult: boolean,
  calculate: () => void
  reset: () => void
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