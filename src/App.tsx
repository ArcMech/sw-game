import { useState } from 'react'
import {
  Button,
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Layout } from 'layouts'
import { Playground } from 'components'
import { ResourceType } from 'types'
import { useGetApi } from 'hooks'

const App = () => {
  const [resource, setResource] = useState('people')
  const firstData = useGetApi(resource as ResourceType)
  const secondData = useGetApi(resource as ResourceType)

  const handleChange = (event: SelectChangeEvent) => {
    setResource(event.target.value as string)
  }

  return (
    <Layout>
      <Grid container spacing={2}>
        <Playground firstCardData={firstData} secondCardData={secondData} />
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ maxWidth: 240 }}>
            <FormControl fullWidth>
              <InputLabel>Resource</InputLabel>
              <Select
                value={resource}
                label="Resource"
                onChange={handleChange}
                color="info"
              >
                <MenuItem value="starships">Starships</MenuItem>
                <MenuItem value="people">People</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button size="large" color="secondary" variant="contained">
            Play!
          </Button>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App
