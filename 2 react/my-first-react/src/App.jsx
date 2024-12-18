import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome({name,isMember}){
  return (
    <div>

    </div>
  )
}

function App(){
  return(
    <div>
      <Welcome name="Alice" isMember={true}></Welcome>
      <Welcome name="Bob" isMember={false}></Welcome>
    </div>
  )
}

export default function Todo()

export default App;