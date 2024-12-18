import { useEffect, useState } from "react";
import Services from "../components/services/services";
const Product = () =>{
    const[countries,setCountries]= useState ([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {
                countries.map(country=><Services></Services>)
            }
        </div>
    );
}

export default Product