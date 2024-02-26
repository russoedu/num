import { TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { DebugResultValueT, restVn, difficultyVn } from '../helpers/types'
import './DebugResultGrid.css'
import { ChangeEvent } from 'react'

export function DebugResultGrid ({ data, xs }: { data: DebugResultValueT[], xs: number }) {
  function onChange (d: DebugResultValueT, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const val = Number(e.target.value)
    if (
      (d.type === 'difficulty' && difficultyVn.includes(val)) ||
      (d.type === 'rest' && restVn.includes(val))
    ) {
      d.value[1](val as any)
    }
  }

  return (
    <Grid xs={xs} >
      <table className='table'>
        <tbody>
          {data.map(d => (
            <tr key={d.title}>
              <td>
                <Typography variant='h6' align='right'>
                  {d.title}
                </Typography>
              </td>
              <td>
                {
                  d.title === 'DM' || d.title === 'EX' || d.title === 'R3'
                    ? <Typography variant='h5' align='left' key={d.title} className='vn'>
                      {d.value as any}
                    </Typography>
                    : <TextField
                      id='outlined-basic'
                      className='debug-input'
                      label='X'
                      variant='filled'
                      size='small'
                      onChange={(e) => onChange(d, e)}
                      value={d.value[0]}
                    />
                }
              </td>
              {typeof d.age !== 'undefined'
                ? <td key={d.title}>
                  <Typography variant='body2' align='left'>
                    {d.age} anos
                  </Typography>
                </td>
                : <></>}
            </tr>
          ))}
        </tbody>
      </table>
    </Grid>
  )
}
