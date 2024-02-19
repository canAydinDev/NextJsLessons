"use client"
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item style={{height: "400px", width:"100%", position: "relative"}}>
      <Image src="/images/slider-01.jpg" alt="slider01"  fill />
    </Carousel.Item>
    <Carousel.Item>
      <Image src="/images/slider-02.jpg" alt="slider01" width={1020} height={400}  />
    </Carousel.Item>

  </Carousel>
  )
}

export default Slider