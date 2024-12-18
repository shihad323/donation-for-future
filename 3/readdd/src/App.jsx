import { useEffect, useState } from "react";

function App(){
  const [allData,setAllData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])
  return(
    <>
        <h1>Data : {allData.length}</h1>
        {
          allData.map(singleData => <p>{singleData.name}</p>)
        }
    </>
  )

}

export default App;
