import './App.css'
import SidebarDrawer from './pages/sidebarDrawer/SidebarDrawer'
import AppRouter from './AppRouter'

function App() {
  return (
    <div className="App">
      <SidebarDrawer />
      <AppRouter />
    </div>
  )
}

export default App
