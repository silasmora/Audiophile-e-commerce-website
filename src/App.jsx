import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Headphones from "./pages/Headphones"
import Xx99ProductDetail from './pages/Xx99ProductDetail'
import Earphones from "./pages/Earphones"
import Speakers from "./pages/Speakers"

function App() {
  
  return (
    
    <div>
      <Header />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/headphones' element={<Headphones />}/>
          <Route path='/headphones/mark-ii' element={<Xx99ProductDetail />} />
          <Route path='/speakers' element={<Speakers />}/>
          <Route path='/earphones' element={<Earphones />}/>
        </Routes>

      <Footer />
    </div>
    
  )
}

export default App
