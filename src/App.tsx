import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { Layout } from 'layouts'
import { CardComponent } from 'components'
import { useGetApi } from 'hooks'
import { getRandomNumber } from 'utils'

const App = () => {
  const data = useGetApi('starships')

  const dar = getRandomNumber(1, 82)

  console.log(`dar`, dar)

  return (
    <Layout>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <CardComponent />
        </Grid>
        <Grid item xs={6}>
          <CardComponent />
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
