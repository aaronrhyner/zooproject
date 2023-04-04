import Home from '../pages/home/Home'
import HomeIcon from '@mui/icons-material/Home'
import InteractiveMap from '../pages/interactiveMap/InteractiveMap'
import MapIcon from '@mui/icons-material/Map'

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    icon: <HomeIcon />
  },
  {
    path: '/map',
    name: 'Map',
    element: <InteractiveMap />,
    icon: <MapIcon />
  }
]

export default routes
