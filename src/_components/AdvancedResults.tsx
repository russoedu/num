import { Box, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { AdvancedCalculator } from '../_services/AdvancedCalculator'
import './Results.css'

/**
 * The main form component
 * @returns Form component
 */
export function AdvancedResult ({ result }: { result: AdvancedCalculator }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 8 }}>
        <Grid xs={8}>
          <Box  sx={{ paddingBottom: 1 }}>
            Piramide
            <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(result.piramide, null, 2)}
            </pre>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}