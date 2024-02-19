
import { config } from '@/utils/config';
import React from 'react'

const GetCategories =async () => {

    const resp = await fetch(`${config.apiURL}/products`);
    const products = await resp.json();
    let categoryList = []
    

  return (
    <>
  {
    products.map((item, index) => {
      if (categoryList.includes(item.category)) {
        return null;
      } else {
        categoryList.push(item.category);
        
        return <option key={index} value= {item.category}>{item.category}</option>;
      }
    })
  }
</>

  )
}

export default GetCategories