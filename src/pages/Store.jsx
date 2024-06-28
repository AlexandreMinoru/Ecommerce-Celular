import React, { useEffect, useState } from 'react'
import {MdShoppingCart, MdOutlineAddShoppingCart} from "react-icons/md"
import { getItem, setItem } from '../sevices/LocalStorage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ProductsArea } from '../css/styles';
import Header from '../components/header';

function Store() {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem("cart") || []);

    useEffect(() =>{
        const fecthApi = async () =>{
            const url = "https://Api.mercadolibre.com/sites/MLB/search?q=celular"
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results);
        }
        fecthApi();
    }, [])

    const handleClick = (e) =>{
      const element = cart.find((obj) => obj.id === e.id)
      if(element){
        const arrFilter = cart.filter((obj) => obj.id !== e.id)
        setCart(arrFilter);
        setItem("cart", arrFilter);
      }else{
        const newCart = [...cart, e]
        setCart(newCart);
        setItem("cart", newCart);
      }
    }

  return (
    <div>
      <Header/>
        <ProductsArea>
          {
            data.map((e) => (
              <div key={e.id}>
                <h4>{e.title}</h4>
                <img src={e.thumbnail} alt="" />
                <h4>{`R$${e.price}`}</h4>
                <button onClick={() => handleClick(e)}>
                  {
                    cart.some((itemCart) => itemCart.id === e.id) ? (
                      <MdShoppingCart/>
                    ): (<MdOutlineAddShoppingCart/>)

                  }
                
                </button>
              </div>
              )
            )
          }
        </ProductsArea>
    </div>

  );
}
export default Store;