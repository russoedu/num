import { useState } from 'react'
import { NumericMap } from '../services/NumericMap'
import { MainView } from '../helpers/types'
import { Tec3Map } from '../componentsTecniques/Tec3Map'
import { Tec0Cycles } from '../componentsTecniques/Tec0Cycles'
import { Paper, Tab, Tabs } from '@mui/material'
import './MapOrCycle.css'

/**
 * Map or Cycle view
 * @param result - The map result
 */
export function MapOrCycle ({ result }: { result: NumericMap }) {
  const [values, setValue] = useState(MainView.MAP)

  const handleChange = (_event: React.SyntheticEvent, newValue: MainView) => {
    setValue(newValue)
  }

  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Tabs
        value={values}
        onChange={handleChange}
        indicatorColor='primary'
        aria-label='view selector'
      >
        <Tab label='Mapa' />
        <Tab label='Ciclos' />
      </Tabs>
      { values === MainView.MAP
        ? (
          <Tec3Map result={result}/>
        )
        : (
          <Tec0Cycles result={result}/>
        )
      }
    </Paper>
  )
}
