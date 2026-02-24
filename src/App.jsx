
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/FooterView/Footer'
import Home from './components/HomeView/Home'
import IconWsp from './components/IconWsp'
import ContactView from './components/ContactoView/ContactView'
import ServiciosView from './components/ServiciosView/ServiciosView'
import NosotrasView from './components/NosotrasView/NosotrasView'
import ScrollTop from './components/Navigation/ScrollTop'
import ServiciosGenerales from './components/Navigation/ServiciosGenerales'



function App() {

  return (
    <>
      <BrowserRouter>

        <ScrollTop></ScrollTop>
        <NavBar></NavBar>
        <IconWsp></IconWsp>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Servicios' element={<ServiciosView/>}></Route>
          <Route exact path='/Servicios/:categoria' element={<ServiciosGenerales/>}></Route>
          <Route exact path='/Contacto' element={<ContactView />}></Route>
          <Route exact path='/Nosotras' element={<NosotrasView/>}></Route>

        </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
