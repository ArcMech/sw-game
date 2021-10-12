import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export const PersonCard: React.FC<any> = ({
  name,
  mass,
  height,
  gender,
  vehicles,
  starships,
  winner,
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        border: `${winner ? '3px solid green' : '3px solid red'}`,
        backgroundColor: `${winner ? '#e8fce8' : 'lightred'}`,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Gender: {gender}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Mass: {mass}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Height: {height}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Amount of starships: {starships?.length || 0}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Amount of vehicles: {vehicles?.length || 0}
        </Typography>
      </CardContent>
    </Card>
  )
}
