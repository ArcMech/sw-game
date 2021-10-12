import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SW Game
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span>0</span>:<span>0</span>
          </Typography>
          <Button color="inherit" startIcon={<HighlightOffIcon />}>
            Clear
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
