import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./components/Header"
import { NavItemsModal } from "./components/NavItemsModal"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Headphones from "./pages/Headphones"
import Mark2 from "./pages/Mark2"
import Mark1 from "./pages/Mark1"
import Earphones from "./pages/Earphones"
import Speakers from "./pages/Speakers"
import Xx59 from "./pages/Xx59"
import { Zx9 } from "./pages/Zx9"
import Zx7 from "./pages/Zx7"
import Yx1 from "./pages/Yx1"
import Cart from "./components/Cart"
import Checkout from "./pages/Checkout"


function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation()
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname])
  
    return null
  }
  
  return (
    
    <div className="relative">
      <Header />
      <NavItemsModal />
      <Cart />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/headphones' element={<Headphones />}/>
        <Route path='/headphones/mark-ii' element={<Mark2 />} />
        <Route path='/headphones/mark-i' element={<Mark1 />} />
        <Route path='/headphones/xx59' element={<Xx59 />} />

        <Route path='/speakers' element={<Speakers />}/>
        <Route path='/speakers/zx9' element={<Zx9 />} />
        <Route path='/speakers/zx7' element={<Zx7 />} />

        <Route path='/earphones' element={<Earphones />}/>
        <Route path='/earphones/yx1' element={<Yx1 />} />

        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App
