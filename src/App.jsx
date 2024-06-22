import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Main from './Components/Main/Main.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Main/>
        <Footer/>
    </>
  )
}

export default App
