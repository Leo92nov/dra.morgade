
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Navigation/NavBar'
import Footer from './FooterView/Footer'

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar></NavBar>

        <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>

        </Routes>
     
      <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
