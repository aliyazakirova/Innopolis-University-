import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export const Catalog = () => {
    const [goods, setGoods] = useState([]);
  
    useEffect(() => {
      fetch('https://6585ddb1022766bcb8c97887.mockapi.io/menu-restaurant')
        .then((res) => res.json())
        .then((data) => {
          setGoods(data);
        });
    }, []);
  
    return (
      <>
        <h1>im catalog</h1>
        {goods.map(({id, image, name, price, description }) => { 
          return <div key={id} style={{border: '1px solid black;', margin: '10px;'}}>
           
            <h2>
                <Link to={`/catalog/${id}`}>{name}</Link>
            </h2>
            <img src={image} alt=""/>
            <div>{description}</div>
            <div>{price}</div>
            </div>; 
        })}
      </>
    );
  };
  