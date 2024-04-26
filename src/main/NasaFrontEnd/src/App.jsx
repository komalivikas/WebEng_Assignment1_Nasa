
//src-> App.jsx
import { useState } from 'react'
import AppRoutes from './Routes';
import './App.css'
import NasaApiComponent from './Component/NasaApiComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      <AppRoutes/>
      </div>
     
    </>
  )
}

export default App
