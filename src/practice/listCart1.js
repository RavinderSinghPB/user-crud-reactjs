import { useState} from "react";

function App() {

    let pre_products = [ {name:"A",price:15},{name:"B",price:35},{name:"C",price:418},
                        {name:"D",price:15},{name:"E",price:35},{name:"F",price:418} ];

    const [products, setProducts] = useState(pre_products);
    const [cart, setCart] = useState([]);

    function addToCart(item){
        // store item and no of counts in cart
        let itemInCart = cart.find((item2)=>item2.name===item.name);
        if(itemInCart){
            itemInCart.count++;
            setCart([...cart]);
        }else{
            item.count = 1;
            setCart([...cart,item]);
        }
    }

    function removeFromCart(item){
        let itemInCart = cart.find((item2)=>item2.name===item.name);
        if(itemInCart){
            if(itemInCart.count===1){
                setCart(cart.filter((item2)=>item2.name!==item.name));
            }else{
                itemInCart.count--;
                setCart([...cart]);
            }
        }
    }
  

  return (
    <div >
        <h1>Products</h1>
        {products.map((item,index)=>(
            <div key={index}>
                <button onClick={(e)=>addToCart(item) }>{item.name} {item.price}</button>
            </div>
        ))}

        <h1>Cart</h1>
        {cart.map((item,index)=>(
            <div key={index}>
                <button onClick={(e)=>removeFromCart(item)}>{item.name} {item.price} {item.count}</button>
            </div>
        ))}

      
    </div>
  );
}

export default App;
