import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProductsPage from './pages/products'
import ProductDetails from './components/ProductDetails'

function App() {
  
  return (
   <>
    <ul>
      <li> <Link to="/"> Home </Link> </li>
      <li> <Link to="/products"> Proructs </Link> </li>
      <li> <Link to="/about"> About </Link> </li>
    </ul>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
   </>
  )
}

export default App
