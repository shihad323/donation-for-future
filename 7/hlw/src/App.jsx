import { useEffect, useState } from "react";

function App() {
  const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 
    
  },
  { id: 3, name: "Headphones", price: 100 },
  ];
  const [cart,setCart] = useState([]);
  const addToCart = (product)=>{
    setCart((prevcart)=>[...prevcart,product]);
  };
  useEffect(()=>{
    console.log(`cart update : ${cart.length} items`);
  },[cart])
  return(
       <div>
        <h1>Products</h1>
        <div>
          {products.map((product)=>(
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>Price : ${product.price}</p>
              <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <h2>Cart</h2>
        {cart.length>0?(
             cart.map((item,index)=>(
              <div key={index}>
                <p>{item.name} - ${item.price}</p>
              </div>
             ))
        ):(
             <p>Your cart is empty.</p>
        )}
       </div>
  );
}
export default App;
