import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner /> <Movies /></>} />
          <Route path='/WatchList' element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
