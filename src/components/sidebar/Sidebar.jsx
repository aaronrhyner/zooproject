import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import routes from '../../routes/Routes'
import { useNavigate } from 'react-router-dom'

function Sidebar({ open, toggleSidebar }) {
  const navigate = useNavigate()

  return (
    <Drawer anchor={'left'} open={open} onClose={toggleSidebar(false)}>
      <Box
        role={'presentation'}
        onClick={toggleSidebar(false)}
        onKeyDown={toggleSidebar(false)}
      >
        <List>
          {routes.map((route, key) => (
            <ListItem key={key}>
              <ListItemButton onClick={() => navigate(route.path)}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText>{route.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar
