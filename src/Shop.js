import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Shop () {

 useEffect(() => {
  fetchItems();
 }, []);

 const [items, setItems] = useState([]);

 const fetchItems = async () => {
  const data = await fetch("https://fortnite-api.com/v2/shop/br/combined");

  const items = await data.json();
  console.log(items);
  setItems(items.data.featured.entries[0].items);
 };

 return (
  <div>
   <h1>Shop</h1>
   <h4>Featured:</h4>
    <ul>
     {items.map(item => (
      <li key={item.id}> <Link to={`/shop/${item.id}`}>{item.name}</Link>
      </li>
     ))}
    </ul>
   <Link to={{pathname: "/"}}>Home</Link>
   <br/>
   <Link to={{pathname: "/About"}}>About</Link>
  </div>
 );
}