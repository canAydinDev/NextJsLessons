
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/logo.png"
import PageHeader from '@/components/common/page-header'

const ContactPage =  () => {
  
  return (
    <div>
      <PageHeader title="Contact"/>
      <div style={{height: "500px", width:"250px", position: "relative"}}>
      <Image src="https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      fill
      style={{objectFit: "cover"}}
      />
      </div>

      <Image src={logo}/>

    </div>
  )
}

export default ContactPage