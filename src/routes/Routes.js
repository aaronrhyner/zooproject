import Home from '../pages/home/Home'
import { Home as HomeIcon, Pets as PetsIcon } from '@mui/icons-material'
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
    icon: <PetsIcon />
  }
]

export default routes
