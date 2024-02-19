import ProductHeader from '@/components/dashboard/products/product-header';
import ProductList from '@/components/dashboard/products/product-list';
import { config } from '@/utils/config';
import React from 'react'

const DashboardProductsPage =async () => {
  const rest = await fetch(`${config.apiURL}/products`)
  const products = await rest.json();
  
  return (
    <div>
      <ProductHeader/>
      <ProductList products={products}/>
    </div>
  )
}

export default DashboardProductsPage