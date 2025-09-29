import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProductsPage from './pages/products'
import ProductDetails from './components/ProductDetails'
import Navbar from './components/layout/Navbar'

function App() {
  
  return (
   <>
    <Navbar />
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
