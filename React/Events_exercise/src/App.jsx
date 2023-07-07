import { useState } from 'react'
import './App.css'
import PrintJson from './Components/PrintJson'
import PrintInput from './Components/PrintInput'
import PrintSelect from './Components/Select'

function App() {

  return (
    <>
      <PrintJson />

      <hr />

      <PrintInput />

      <hr />

      <PrintSelect />
    </>
  )
}

export default App
