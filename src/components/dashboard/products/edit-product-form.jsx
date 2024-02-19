"use client"
import React from 'react'
import {Form} from 'react-bootstrap'
import SubmitButton from '../../common/form-controls/submit-button'
import CancelButton from '@/components/common/form-controls/cancel-button'
import GetCategories from '@/components/common/methods/get-things'

const EditProductForm = ({product}) => {
  const {id, title, description, price, image, category} = product;

  return (
    <Form >
        <input type='hidden' name="id" defaultValue={id}/>
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            defaultValue={title}
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            defaultValue={description}
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            defaultValue={price}
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Category</Form.Label>
          <Form.Select name='category' defaultValue={category}>
            <GetCategories/>
          </Form.Select>
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            type="text"
            defaultValue={image}
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>
      <SubmitButton title="Update"/>
      <CancelButton/>
    </Form>
    
  )
}

export default EditProductForm