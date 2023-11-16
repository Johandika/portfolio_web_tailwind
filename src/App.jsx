import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Test from "./pages/Test"
import Navbar from "./pages/sections/Navbar"

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<Test/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
