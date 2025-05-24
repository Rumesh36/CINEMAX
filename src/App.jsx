import Navbar from "./components/Navbar"
import { BrowserRouter, Link , Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Error from "./pages/Error"


function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element = {<Landing/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="*" element={<Error/>}></Route>
      </Routes>
      
      </BrowserRouter>

     
    </>
  )
}

export default App
