import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css"
import Signup from './pages/Signup';

function Layout() {

  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
  
}

export default Layout
