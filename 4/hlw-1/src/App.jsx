import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Singleuserdata from './assets/component/userdata/Singleuserdata';

function App() {
  const [allData,setAllData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setAllData(data))
  },[])

  return (
    <>
      <h1>Data : {allData.length}</h1>

      {
        allData.map(singleData => <Singleuserdata
        singleData = {singleData}
        ></Singleuserdata> )
      }
    </>
  )
}

export default App
