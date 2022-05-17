import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Settings from './pages/settings'
import { routes } from './shared/routes'
import Menu from './components/Navbar/Menu'
import Help from './pages/help'
import Detailednews from './components/newsList/NewsDetailed'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Routes>
          <Route path={routes.root} element={<Home />} />
          <Route path={routes.settings} element={<Settings />} />
          <Route path={routes.help} element={<Help />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.detailednews} element={<Detailednews />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App
