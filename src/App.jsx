import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes'
import Header from './Components/Header'
import Contact from './Screens/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))}
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={"Page Not Found"} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
