"use client"
import React from 'react'
import { Form} from 'react-bootstrap'
import SubmitButton from '../../common/form-controls/submit-button'
import CancelButton from '@/components/common/form-controls/cancel-button'
import { updateProductAction } from '@/actions/product-actions'
import {useFormState} from "react-dom"

const EditProductForm = ({product}) => {
  
  const initialState = { message: null, errors: {} };
  //useFormState hook u ile form ve server arasinda cift yonlu bir iletisim kanali olusturuldu
  //dispatch ile formdan server action a
  //state ile server action dan forma
  const [state, dispatch] = useFormState(updateProductAction, initialState);

  const {title, description, price, category, image} = state.errors;

  return (
    <>
    {state.errors.commonError ? (<div className='alert alert-danger'>{state.errors.commonError}</div>) : ("") }
    <Form action={dispatch} >
        <input type='hidden' name="id" defaultValue={product.id} />
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            defaultValue={product.title}
            isInvalid={!!title}
          />
          <Form.Control.Feedback type='invalid'>{title}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            defaultValue={product.description}
            isInvalid={!!description}
          />
          <Form.Control.Feedback type='invalid'>{description}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            defaultValue={product.price}
            isInvalid={!!price}
          />
          <Form.Control.Feedback type='invalid'>{price}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Category</Form.Label>
          <Form.Select name='category' defaultValue={product.category} isInvalid={!!category}>
          <option value="Select">Select</option>
          <option value="Select">Select</option>
            <option value="Health">Health</option>
            <option value="Games">Games</option>
            <option value="Toys">Toys</option>
            <option value="Computers">Computers</option>
          </Form.Select>
          <Form.Control.Feedback type='invalid'>{category}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            type="text"
            defaultValue={product.image}
            isInvalid={!!image}
          />
          <Form.Control.Feedback type='invalid'>{image}</Form.Control.Feedback>
        </Form.Group>
      <SubmitButton title="Update"/>
      <CancelButton/>
    </Form>
    </>
    
  )
}

export default EditProductForm