import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  
  return (
    
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
    
  )
}

export default App
