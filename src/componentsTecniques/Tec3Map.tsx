import Grid from '@mui/material/Unstable_Grid2'
import { Box, Divider, Typography } from '@mui/material'
import { NumericMap } from '../services/NumericMap'
import { ResultGrid } from '../components/ResultGrid'
import './Tec.css'
import { purple } from '../helpers/types'

/**
 * The main form component
 * @returns Form component
 */
export function Tec3Map ({ result }: { result: NumericMap }) {
  return (
    <>
      <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 8 }}>
        <Grid xs={8}>
          <Box sx={{ paddingBottom: 1 }}>
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
            { title: 'MO', value: result.MO, description: 'MOtivação – alma /personalidade – quem é' },
            { title: 'EU', value: result.EU, description: 'EU íntimo – sonho – o que quer na vida' },
            { title: 'EX', value: result.EX, description: 'EXpressão – o que aparenta ser' },
          ]}
          xs={1}
        />
        <ResultGrid
          data={[
            { title: 'CD', value: result.CD, description: 'Caminho do Destino – o que veio fazer / realizar'},
          ]}
          xs={1}
        />
        <Divider className='divider-sm'/>
        <ResultGrid
          data={[
            { title: 'C1', value: result.C1, age: '0/28', description: 'Primeiro ciclo' },
            { title: 'C2', value: result.C2, age: '28/56', description: 'Segundo ciclo' },
            { title: 'C3', value: result.C3, age: '+56', description: 'Terceiro ciclo' },
          ]}
          xs={2}
        />
        <Divider className='divider-md'/>
        <Divider className='divider-sm'/>
        <ResultGrid
          data={[
            { title: 'D1', value: result.D1, age: '0/28', description: 'Primeiro desafio' },
            { title: 'D2', value: result.D2, age: '28/56', description: 'Segundo Desafio' },
            { title: 'DM', value: result.DM, description: 'Desafio Maior – o que veio aprender com dificuldade' },
          ]}
          xs={2}
        />
        <Divider className='divider-sm'/>
        <ResultGrid
          data={[
            { title: 'R1', value: result.achievements.R1.vn, age: `${result.achievements.R1.start}/${result.achievements.R1.end}`, description: 'Primeira Realização ou Real' },
            { title: 'R2', value: result.achievements.R2.vn, age: `${result.achievements.R2.start}/${result.achievements.R2.end}`, description: 'Segunda Realização ou Real' },
            { title: 'R3', value: result.achievements.R3.vn, age: `${result.achievements.R3.start}/${result.achievements.R3.end}`, description: 'Terceira Realização ou Real' },
            { title: 'R4', value: result.achievements.R4.vn, age: `+${result.achievements.R4.start}`, description: 'Quarta Realização ou Real' },
          ]}
          xs={2}
        />
        <Grid xs={8}>
          <Divider sx={{ paddingTop: 1 }}/>
          <Box sx={{ paddingTop: 1 }}>
            <Typography variant='h6' display='inline'>
              Ano Pessoal (AP)
            </Typography>
            &nbsp;
            <Typography variant='h5' display='inline' className='vn'>
              {result.personalYear.vn}
            </Typography>
            &nbsp;
            <Typography variant='h6' display='inline'>
              de {result.personalYear.start.toLocaleDateString()} a {result.personalYear.end.toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
