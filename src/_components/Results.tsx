import Grid from '@mui/material/Unstable_Grid2'
import { Paper } from '@mui/material'
import { Calculator } from '../_services/Calculator'
import { ResultGrid } from './ResultGrid'

/**
 * The main form component
 * @returns Form component
 */
export function Result ({ result }: { result: Calculator }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Grid container spacing={1} columns={{ xs: 2, sm: 6, md: 8 }}>
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
        <ResultGrid
          data={[
            { title: 'C1', value: result.mo, age: '0/28' },
            { title: 'C2', value: result.eu, age: '28/56' },
            { title: 'C3', value: result.ex, age: '+56' },
          ]}
          xs={2}
        />
        <ResultGrid
          data={[
            { title: 'D1', value: result.d1, age: '0/28' },
            { title: 'D2', value: result.d2, age: '28/56' },
            { title: 'DM', value: result.dm },
          ]}
          xs={2}
        />
        <ResultGrid
          data={[
            { title: 'R1', value: result.mo },
            { title: 'R2', value: result.eu },
            { title: 'R3', value: result.ex },
            { title: 'R4', value: result.ex },
          ]}
          xs={2}
        />
      </Grid>
    </Paper>
  )
}