import PageHeader from '@/components/common/page-header'
import React from 'react'

const ProductDetails = ({params}) => {
  console.log(params)
  return (
    <div>
      <PageHeader title="abc"/>
      ProductDetails {params.id}</div>
  )
}

export default ProductDetails