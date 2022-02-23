import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Section1(props) {
  
  return (
<ListGroup>
    {props.products.map((product)=>{
  return(
      <ListGroup.Item key = {product.name}
      onClick ={()=>{props.setSelectedProduct(product);
      props.setShowImage(false);}}>{product.name}</ListGroup.Item>
  )})}
</ListGroup>
  
  )
}
