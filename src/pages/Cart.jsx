import React, { useState } from 'react'
import { getItem, setItem } from '../sevices/LocalStorage';
import { MdRemoveShoppingCart } from "react-icons/md";
import { ProductsArea } from '../css/styles';
import Header from '../components/header';
const Cart = () => {

   

    const [data,setData] = useState(getItem("cart") || []);

    const removeItem = (e) =>{
        const arrFilter = data.filter((obj) => obj.id !== e.id)
        setData(arrFilter);
        setItem("cart", arrFilter);

    }

    const subTotal = data.reduce((acc,cur) => acc + cur.price, 0);
  return (
    <div>
        <Header></Header>
        <h3>{`Subtotal: R$${subTotal}`}</h3>
        <div>
        <ProductsArea>
            {
                data.map((e) =>(
                    
                    <div key={e.id}>
                        <h4>{e.title}</h4>
                        <img src={e.thumbnail} alt="" />
                        <h4>{`R$${e.price}`}</h4>
                        <button onClick={() => removeItem(e)}><MdRemoveShoppingCart/></button>
                    </div>
                ))
            }
        </ProductsArea>
        </div>
    </div>
  )
}

export default Cart;