import { useState} from "react";

function App() {

    let pre_products = [ {name:"A",price:15},{name:"B",price:35},{name:"C",price:418},
                        {name:"D",price:15},{name:"E",price:35},{name:"F",price:418} ];

    const [products, setProducts] = useState(pre_products);
    const [cart, setCart] = useState([]);
  

  return (
    <div >
        <h1>Products</h1>
        {products.map((item,index)=>(
            <div key={index}>
                <button onClick={(e)=>setCart([...cart,item])}>{item.name} {item.price}</button>
            </div>
        ))}

        <h1>Cart</h1>
        {cart.map((item,index)=>(
            <div key={index}>
                <button onClick={(e)=>setCart(cart.filter((item2)=>item2.name!==item.name))}>{item.name} {item.price}</button>
            </div>
        ))}

      
    </div>
  );
}

export default App;
