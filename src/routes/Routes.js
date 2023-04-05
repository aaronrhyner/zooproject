import Home from '../pages/home/Home'
import HomeIcon from '@mui/icons-material/Home'
import AnimalList from '../pages/animallist/AnimalList'

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
    element: <AnimalList />,
    icon: ''
  }
]

export default routes
