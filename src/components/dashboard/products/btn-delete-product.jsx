"use client"
import React from 'react'
import { Button } from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa';

const BtnDeleteProduct = ({id}) => {
  const handleClick = (id) => { 
    const resp = confirm("Are you sure to delete")
    if(!resp) return;

    }
  return (
    <Button variant='Link' onClick={handleClick}><FaRegTrashAlt/></Button>
  )
}

export default BtnDeleteProduct