import { Grid } from '@mui/material'
import { PersonCard } from 'components'

export const Playground: React.FC<any> = ({
  firstCardData,
  secondCardData,
}) => {
  const isFirstWinner = +firstCardData.mass > +secondCardData.mass
  const isSecondWinner = !isFirstWinner

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <PersonCard winner={isFirstWinner} {...firstCardData} />
      </Grid>
      <Grid item xs={6}>
        <PersonCard winner={isSecondWinner} {...secondCardData} />
      </Grid>
    </Grid>
  )
}
