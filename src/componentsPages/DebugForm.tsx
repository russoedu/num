import { Divider, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { DebugResultGrid } from '../components/DebugResultGrid'
import '../componentsTecniques/Tec.css'
import { _number } from '../helpers/_number'
import { NumericMap } from '../services/NumericMap'

/**
 * The main form component
 * @returns Form component
 */
export function DebugForm ({ resultForm }: { resultForm: [NumericMap, React.Dispatch<React.SetStateAction<NumericMap>>] }) {
  const [map, setMap] = resultForm

  const mo = useState(map.MO)
  const moValue = mo[0]
  const eu = useState(map.EU)
  const euValue = eu[0]
  const cd = useState(map.CD)
  const cdValue = cd[0]
  const ex = useState(map.EX)
  const exValue = ex[0]
  const c1 = useState(map.C1)
  const c1Value = c1[0]
  const c2 = useState(map.C2)
  const c2Value = c2[0]
  const c3 = useState(map.C3)
  const c3Value = c3[0]
  const d1 = useState(map.D1)
  const d1Value = d1[0]
  const d2 = useState(map.D2)
  const d2Value = d2[0]
  const dm = useState(map.DM)
  const dmValue = dm[0]
  const r1 = useState(map.R1)
  const r1Value = r1[0]
  const r2 = useState(map.R2)
  const r2Value = r2[0]
  const r3 = useState(map.R3)
  const r3Value = r3[0]
  const r4 = useState(map.R4)
  const r4Value = r4[0]

  const effectValues = [
    moValue,
    euValue,
    cdValue,
    exValue,
    c1Value,
    c2Value,
    c3Value,
    d1Value,
    d2Value,
    dmValue,
    r1Value,
    r2Value,
    r3Value,
    r4Value,
  ]
  useEffect(() => {
    const bdStr = `${_number.leadingZero(map.birthday.year, 4)}-${_number.leadingZero(map.birthday.month)}-${_number.leadingZero(map.birthday.day)}`
    const tdStr = `${_number.leadingZero(map.today.year, 4)}-${_number.leadingZero(map.today.month)}-${_number.leadingZero(map.today.day)}`

    const m = new NumericMap(map.name, bdStr, tdStr)

    m.MO = moValue
    m.EU = euValue
    m.CD = cdValue
    ex[1](_number.sum(moValue + euValue, true))
    m.EX = _number.sum(moValue + euValue, true)
    m.C1 = c1Value
    m.C2 = c2Value
    m.C3 = c3Value
    m.D1 = d1Value
    m.D2 = d2Value
    dm[1](_number.sum(Math.abs(d1Value - d2Value)))
    m.DM = _number.sum(Math.abs(d1Value - d2Value))
    m.R1 = r1Value
    m.R2 = r2Value
    r3[1](_number.sum(m.R1 + m.R2, true))
    m.R3 = _number.sum(m.R1 + m.R2, true)
    m.R4 = r4Value

    setMap(m)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, effectValues)

  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 8 }}>
        <DebugResultGrid
          data={[
            { title: 'MO', value: mo, type: 'rest'},
            { title: 'EU', value: eu, type: 'rest'},
            { title: 'EX', value: ex, type: 'rest'},
          ]}
          xs={1}
        />
        <DebugResultGrid
          data={[
            { title: 'CD', value: cd, type: 'rest'},
          ]}
          xs={1}
        />
        <Divider className='divider-sm'/>
        <DebugResultGrid
          data={[
            { title: 'C1', value: c1, age: '0/28', type: 'rest'},
            { title: 'C2', value: c2, age: '28/56', type: 'rest'},
            { title: 'C3', value: c3, age: '+56', type: 'rest'},
          ]}
          xs={2}
        />
        <Divider className='divider-md'/>
        <Divider className='divider-sm'/>
        <DebugResultGrid
          data={[
            { title: 'D1', value: d1, age: '0/28', type: 'difficulty' },
            { title: 'D2', value: d2, age: '28/56', type: 'difficulty' },
            { title: 'DM', value: dm, type: 'difficulty' },
          ]}
          xs={2}
        />
        <Divider className='divider-sm'/>
        <DebugResultGrid
          data={[
            {
              title: 'R1',
              value: r1,
              age:   `${map.achievements.R1.start}/${map.achievements.R1.end}`,
              type:  'rest',
            },
            {
              title: 'R2',
              value: r2,
              age:   `${map.achievements.R2.start}/${map.achievements.R2.end}`,
              type:  'rest',
            },
            {
              title: 'R3',
              value: r3,
              age:   `${map.achievements.R3.start}/${map.achievements.R3.end}`,
              type:  'rest',
            },
            {
              title: 'R4',
              value: r4,
              age:   `+${map.achievements.R4.start}`,
              type:  'rest',
            },
          ]}
          xs={2}
        />
      </Grid>
    </Paper>
  )
}
