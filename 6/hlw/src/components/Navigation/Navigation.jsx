import { useEffect, useState } from 'react';
import './Navigation.css'
const Navigation = () => {

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    return(
        <div>
            {
                product.map(product=>
                    
                    <Abdul></Abdul>
                )
            }
        </div>
    )
};

export default Navigation;