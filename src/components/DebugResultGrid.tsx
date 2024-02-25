import { TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { DebugResultValueT } from '../helpers/types'
import './DebugResultGrid.css'

export function DebugResultGrid ({ data, xs }: { data: DebugResultValueT[], xs: number }) {
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
                <TextField
                  id='outlined-basic'
                  className='debug-input'
                  label='X'
                  variant='filled'
                  size='small'
                  onChange={(e) => d.value[1](Number(e.target.value) as any)}
                  value={d.value[0]}
                />
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
