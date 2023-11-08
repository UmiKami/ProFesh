import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function Layout() {

  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>} />

      <Route element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
  
}

export default Layout
