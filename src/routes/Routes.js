import Home from '../pages/home/Home'
import HomeIcon from '@mui/icons-material/Home'
import PolicyIcon from '@mui/icons-material/Policy'
import GavelIcon from '@mui/icons-material/Gavel'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import News from '../pages/news/News'
import LegalNotice from '../pages/legalNotice/LegalNotice'
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy'

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
    path: '/legalnotice',
    name: 'Legal Notice',
    element: <LegalNotice />,
    icon: <GavelIcon />
  },
  {
    path: '/privacypolicy',
    name: 'Privacy Policy',
    element: <PrivacyPolicy />,
    icon: <PolicyIcon />
  }
]

export default routes
