import { Route, Routes } from 'react-router-dom'
import routes from './routes/Routes'
import { Fragment } from 'react'
import LegalNotice from './pages/legalNotice/LegalNotice'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'
import InfoPage from './pages/news/InfoPage'
import AnimalClassDetails from './pages/animallist/AnimalClassDetails'
import AnimalDetails from './pages/animallist/AnimalDetails'

function AppRouter() {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Fragment key={key}>
          <Route path={route.path} element={route.element} />
        </Fragment>
      ))}
      <Route path={'/legalnotice'} element={<LegalNotice />} />
      <Route path={'/privacypolicy'} element={<PrivacyPolicy />} />
      <Route path={'/news/:id'} element={<InfoPage />} />
      <Route path={'/animals/:classname'} element={<AnimalClassDetails />} />
      <Route
        path={'/animals/:classname/:animalname'}
        element={<AnimalDetails />}
      />
    </Routes>
  )
}

export default AppRouter
