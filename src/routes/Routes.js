import Home from '../pages/home/Home'
import AnimalClassList from '../pages/animallist/AnimalClassList'
import HomeIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import News from '../pages/news/News'
import InteractiveMap from '../pages/interactiveMap/InteractiveMap'
import MapIcon from '@mui/icons-material/Map'
import PetsIcon from '@mui/icons-material/Pets'

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    icon: <HomeIcon />
  },
  {
    path: '/animals',
    name: 'Animals',
    element: <AnimalClassList />,
    icon: <PetsIcon />
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
