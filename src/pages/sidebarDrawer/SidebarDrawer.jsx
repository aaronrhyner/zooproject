import { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  Toolbar
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import routes from '../../routes/Routes'

function SidebarDrawer() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <RouterLink to={'/'}>
            <img src={'zoohzuerich_logo.png'} alt={'logo'} />
          </RouterLink>
        </Toolbar>
      </AppBar>

      <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routes.map((route, key) => {
              return (
                <ListItem key={key}>
                  <Button
                    component={RouterLink}
                    to={route.path}
                    style={{ textDecoration: 'none' }}
                    startIcon={route.icon}
                  >
                    {route.name}
                  </Button>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default SidebarDrawer
