import Grid from '@mui/material/Unstable_Grid2'
import { Box, Divider, Paper, Typography } from '@mui/material'
import { Calculator } from '../_services/Calculator'
import { ResultGrid } from './ResultGrid'
import './Results.css'

/**
 * The main form component
 * @returns Form component
 */
export function Result ({ result }: { result: Calculator }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 8 }}>
        <Grid xs={8}>
          <Box  sx={{ paddingBottom: 1 }}>
            <Typography variant='h5' display='inline' color={'#894fd6'} sx={{ fontWeight: 'bold', paddingRight: 1 }}>
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
            { title: 'R1', value: result.r1, age: `0/${result.rAges.r1}` },
            { title: 'R2', value: result.r2, age: `${result.rAges.r1}/${result.rAges.r2}` },
            { title: 'R3', value: result.r3, age: `${result.rAges.r2}/${result.rAges.r3}` },
            { title: 'R4', value: result.r4, age: `+${result.rAges.r3}` },
          ]}
          xs={2}
        />
        <Grid xs={8}>
          <Divider sx={{ paddingTop: 1 }}/>
          <Box sx={{ paddingTop: 1 }}>
            <Typography variant='h6' display='inline' sx={{ paddingRight: 1 }}>
          Ano Pessoal
            </Typography>
            <Typography variant='h5' display='inline' color={'#894fd6'} sx={{ fontWeight: 'bold', paddingRight: 1 }}>
              {result.personalYear.value}
            </Typography>
            <Typography variant='h6' display='inline' sx={{ paddingRight: 1 }}>
          de {result.personalYear.start.toLocaleDateString()} a {result.personalYear.end.toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </Paper>
  )
}