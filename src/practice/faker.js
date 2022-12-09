import { useState} from "react";
import { faker } from '@faker-js/faker';

function App() {

    // let pre_products = [ {name:"A",price:15},{name:"B",price:35},{name:"C",price:418},
    //                     {name:"D",price:15},{name:"E",price:35},{name:"F",price:418} ];

    // use faker to generate products with name price description
    let pre_products = [];

    function generateProducts(){
        for(let i=0;i<10;i++){
            pre_products.push({
                name:faker.commerce.product(),
                price:Math.floor(Math.random()*100),
                description:faker.lorem.paragraph(),
                date:faker.date.recent(10).toISOString().split('T')[0]
            });
        }
    }

    generateProducts();

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
                <div>{item.name} {item.price} {item.date }</div>
                {/* <div>{item.description}</div> */}
                <button onClick={(e)=>addToCart(item) }>addToCart </button>
            </div>
        ))}
{console.log(pre_products)}
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
