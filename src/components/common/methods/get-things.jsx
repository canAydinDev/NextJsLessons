
import { config } from '@/utils/config';
import React from 'react'

const GetCategories =async () => {
  
  const resp = await fetch(`${config.apiURL}/products`);
  const products = await resp.json();

  
  const categories = [];

  
  products.forEach(product => {
      const category = product.category;
      if (!categories.includes(category)) {
          categories.push(category);
      }
  });

  return (
    <>
  {
    categories.map((item,index)=> (
      <option key={index} value={item}>{item}</option>
      
    ))
  }
</>

  )
}

export default GetCategories