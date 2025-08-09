import { useState } from 'react'


import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      <Header/>
      <Home/>
      <Footer/>

    </div>
    
  )
}

export default App
