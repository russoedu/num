import { Box, Button, ButtonGroup } from '@mui/material'

export function Advancedbuttons ({ advancedTecniques, advancedMap }: {
  advancedTecniques: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
  advancedMap: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) {
  const [showAdvancedTecniques, setShowAdvancedTecniques] = advancedTecniques
  const [showAdvancedMap, setShowAdvancedMap] = advancedMap
  
  function handleTecniques () {
    setShowAdvancedMap(false)
    setShowAdvancedTecniques(true)
  }

  function handleMap () {
    setShowAdvancedMap(true)
    setShowAdvancedTecniques(false)
  }


  return (
    <Box sx={{ padding: 3, marginTop: 5, textAlign: 'center' }}>
      <ButtonGroup variant='contained' aria-label='outlined primary button group'>
        <Button
          disabled={showAdvancedTecniques}
          onClick={handleTecniques}
        >Ver técnicas</Button>
        <Button
          disabled={showAdvancedMap}
          onClick={handleMap}
        >Var mapa completo</Button>
      </ButtonGroup>
    </Box>
  )
}