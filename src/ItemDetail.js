import React, { useState, useEffect } from 'react';

export default function ItemDetail ({match}) {

 useEffect(() => {
  fetchItem();
  console.log(match);
 }, []);

 const [item, setItem] = useState({
  images: {}
 });

 const fetchItem = async () => {
  const fetchItem = await fetch(`https://fortnite-api.com/v2/shop/br/combined/get_ids_here=${match.whatever.id}`);

  const item = await fetchItem.json();
  setItem(item);
 };

 return (
  <div>
   <h1>{item.name}</h1>
   <img src={item.images.image} alt=""/>
  </div>
 );
}