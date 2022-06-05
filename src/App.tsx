import { useState } from 'react'
import Header from './components/header' 
import Navbar from './components/navbar' 
import Footer from './components/footer' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Footer></Footer>
    </>
  )
}

export default App
