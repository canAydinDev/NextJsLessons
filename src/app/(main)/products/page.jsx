import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import ProductList from '@/components/products/product-list';
import { config } from '@/utils/config';
import React from 'react'

//export const revalidate = 60;
//export const dynamic = "force-dynamic";


export const metadata = {
  title: "Products",
  description: "You can get luxury electronic devices",
};

const ProductsPage = async () => {

  const rest = await fetch(`${config.apiURL}/products`)
  const products = await rest.json();
  //console.log(products)

  return (
    <div>
      <PageHeader title="Products"/>
      <Spacer/>
      <ProductList products={products}/>
    </div>
  )
}

export default ProductsPage