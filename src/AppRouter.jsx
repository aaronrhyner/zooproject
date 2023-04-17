import { Route, Routes } from 'react-router-dom'
import routes from './routes/Routes'
import { Fragment } from 'react'
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
      <Route path={'/animals/:classname'} element={<AnimalClassDetails />} />
      <Route
        path={'/animals/:classname/:animalname'}
        element={<AnimalDetails />}
      />
    </Routes>
  )
}

export default AppRouter
