import React from 'react'

const NotFound = () => {
  return (
    
    <div className='container'>
      <div className='row align-items-center justify-content-center'>
      <div className='col-md-4 d-flex justify-content-center mt-5 '>
        <img src="/images/images.jpg" className='img-fluid '/> 
      </div>
      <div className='col-md-4 d-flex flex-column pt-4 text-center'>
        <h2 className='text-primary fs-1'>Not Found</h2>
        <p>The page you requested was not found</p>
      </div>
      </div>
    </div>
  )
}

export default NotFound