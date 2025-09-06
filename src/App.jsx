import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import FrontPage from './components/main/FrontPage'
import Guide from './components/main/Guide'
import Testimonial from './components/main/Testimonial'
import Form from './components/main/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <FrontPage/>
      <Guide/>
      <Form/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
