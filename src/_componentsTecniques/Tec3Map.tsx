import Grid from '@mui/material/Unstable_Grid2'
import { Box, Divider, Typography } from '@mui/material'
import { NumericMap } from '../_services/NumericMap'
import { ResultGrid } from '../_components/ResultGrid'
import './Tec.css'
import { purple } from '../_helpers/types'

/**
 * The main form component
 * @returns Form component
 */
export function Tec3Map ({ result }: { result: NumericMap }) {
  return (
    <>
      <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 8 }}>
        <Grid xs={8}>
          <Box  sx={{ paddingBottom: 1 }}>
            <Typography variant='h5' display='inline' color={purple} sx={{ fontWeight: 'bold', paddingRight: 1 }}>
              {result.age}
            </Typography>
            <Typography variant='h6' display='inline'>
          anos
            </Typography>
            <Divider sx={{ paddingTop: 1 }}/>
          </Box>
        </Grid>
        <ResultGrid
          data={[
            { title: 'MO', value: result.mo },
            { title: 'EU', value: result.eu },
            { title: 'EX', value: result.ex },
          ]}
          xs={1}
        />
        <ResultGrid
          data={[
            { title: 'CD', value: result.cd },
          ]}
          xs={1}
        />
        <Divider className='divider-sm'/>
        <ResultGrid
          data={[
            { title: 'C1', value: result.c1, age: '0/28' },
            { title: 'C2', value: result.c2, age: '28/56' },
            { title: 'C3', value: result.c3, age: '+56' },
          ]}
          xs={2}
        />
        <Divider className='divider-md'/>
        <Divider className='divider-sm'/>
        <ResultGrid
          data={[
            { title: 'D1', value: result.d1, age: '0/28' },
            { title: 'D2', value: result.d2, age: '28/56' },
            { title: 'DM', value: result.dm },
          ]}
          xs={2}
        />
        <Divider className='divider-sm'/>
        <ResultGrid
          data={[
            { title: 'R1', value: result.r.r1.vn, age: `${result.r.r1.start}/${result.r.r1.end}` },
            { title: 'R2', value: result.r.r2.vn, age: `${result.r.r2.start}/${result.r.r2.end}` },
            { title: 'R3', value: result.r.r3.vn, age: `${result.r.r3.start}/${result.r.r3.end}` },
            { title: 'R4', value: result.r.r4.vn, age: `+${result.r.r4.start}` },
          ]}
          xs={2}
        />
        <Grid xs={8}>
          <Divider sx={{ paddingTop: 1 }}/>
          <Box sx={{ paddingTop: 1 }}>
            <Typography variant='h6' display='inline' sx={{ paddingRight: 1 }}>
          Ano Pessoal
            </Typography>
            <Typography variant='h5' display='inline' color={purple} sx={{ fontWeight: 'bold', paddingRight: 1 }}>
              {result.personalYear.vn}
            </Typography>
            <Typography variant='h6' display='inline' sx={{ paddingRight: 1 }}>
          de {result.personalYear.start.toLocaleDateString()} a {result.personalYear.end.toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}