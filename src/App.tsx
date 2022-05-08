import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import News from './components/newsList/News'
import About from './pages/about'
import NewsDetailed from './components/newsList/NewsDetailed'
//import Help from "./pages/Help";
//import About from "./page/About";
import { routes } from './shared/routes'
import Menu from './components/Navbar/Menu'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Routes>
          <Route path={routes.root} element={<Home />} />
          <Route path={routes.news} element={<News />} />
          <Route path={routes.newsletr} element={<NewsDetailed />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App
