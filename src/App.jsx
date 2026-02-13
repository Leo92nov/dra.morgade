
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/FooterView/Footer'
import Home from './components/HomeView/Home'
import IconWsp from './components/IconWsp'

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar></NavBar>
      <IconWsp></IconWsp>

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
