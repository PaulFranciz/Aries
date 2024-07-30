import React  from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
 

  return (
    <>
     <Header />
     <main>
       <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default App