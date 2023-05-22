import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Grid, IconButton, Toolbar } from '@mui/material'
import Sidebar from '../../components/sidebar/Sidebar'
import MenuIcon from '@mui/icons-material/Menu'

function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  return (
    <Box>
      <AppBar position={'static'}>
        <Toolbar>
          <IconButton
            size={'large'}
            edge={'start'}
            color={'inherit'}
            sx={{ mr: 2 }}
            onClick={toggleSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Grid item>
            <img
              src={'pictures/zoohzuerich_logo.png'}
              alt={'logo'}
              onClick={() => navigate('/')}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
    </Box>
  )
}

export default Header
