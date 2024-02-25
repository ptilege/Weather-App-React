import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Body from './components/body'

function App() {
 

  return (
   <div className='container'>
    <div className='row'>
      <Header></Header>
    </div>
    <div className='row'>
      <Body></Body>
    </div>
   </div>
  )
}

export default App
