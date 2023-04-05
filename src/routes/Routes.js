import Home from '../pages/home/Home'
import HomeIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import News from '../pages/news/News'

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
  }
]

export default routes
