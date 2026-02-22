
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/FooterView/Footer'
import Home from './components/HomeView/Home'
import IconWsp from './components/IconWsp'
import ContactView from './components/ContactoView/ContactView'
import ServiciosView from './components/ServiciosView/ServiciosView'
import NosotrasView from './components/NosotrasView/NosotrasView'
import Facial from './components/ServiciosView/Facial'
import Corporal from './components/ServiciosView/Corporal'
import Funcional from './components/ServiciosView/Funcional'
import Nutricion from './components/ServiciosView/Nutricion'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <IconWsp></IconWsp>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Servicios' element={<ServiciosView/>}></Route>
          <Route exact path='/Servicios/Facial' element={<Facial/>}></Route>
          <Route exact path='/Servicios/Corporal' element={<Corporal/>}></Route>
          <Route exact path='/Servicios/Funcional' element={<Funcional/>}></Route>
          <Route exact path='/Servicios/Nutricion' element={<Nutricion/>}></Route>
          <Route exact path='/Contacto' element={<ContactView />}></Route>
          <Route exact path='/Nosotras' element={<NosotrasView/>}></Route>

        </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
