
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp'
import Products from './pages/Products/products'
import { Route, Routes } from "react-router"
import ProductDetails from './pages/Products/ProductDetails'


function App() {

  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<SignUp />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/products' element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App
