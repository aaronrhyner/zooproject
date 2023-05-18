import './App.css'
import AppRouter from './AppRouter'
import Footer from './pages/footerDrawer/Footer'
import Header from './pages/header/Header'

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
