
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Navigation/NavBar'
import Footer from './FooterView/Footer'
import Home from './HomeView/Home'

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar></NavBar>
      

        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
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
