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
  calculate: () => void
}
