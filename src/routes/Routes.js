import Home from '../pages/home/Home'
import Impressum from '../pages/Impressum'
import Contact from '../pages/Contact'
import HomeIcon from '@mui/icons-material/Home'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import ArticleIcon from '@mui/icons-material/Article'

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    icon: <HomeIcon />
  },
  {
    path: '/impressum',
    name: 'Impressum',
    element: <Impressum />,
    icon: <ArticleIcon />
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    icon: <LocalPhoneIcon />
  }
]

export default routes
