import React from 'react'

export default function Section3(props) {
  if(props.imageUrl){
    return <img src={props.imageUrl} alt="product" width="200px"/>
}
  
    return null
}
