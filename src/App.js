import './App.css'
import Sidebar from './pages/headerDrawer/Header'
import AppRouter from './AppRouter'
import Footer from './pages/footerDrawer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
