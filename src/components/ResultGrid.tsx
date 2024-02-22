import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ResultValueT } from '../helpers/types'

export function ResultGrid ({ data, xs }: { data: ResultValueT[], xs: number }) {
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
                <Typography variant='h5' align='left' key={d.title} className='vn'>
                  {d.value}
                </Typography>
              </td>
              {typeof d.age !== 'undefined'
                ? <td key={d.title}>
                  <Typography variant='body2' align='right' paddingLeft={4}>
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
