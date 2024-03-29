import Home from '../pages/home/Home'
import HomeIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import News from '../pages/news/News'
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
    path: '/news',
    name: 'News',
    element: <News />,
    icon: <NewspaperIcon />
  },
  {
    path: '/map',
    name: 'Map',
    element: <InteractiveMap />,
    icon: <MapIcon />
  }
]

export default routes
