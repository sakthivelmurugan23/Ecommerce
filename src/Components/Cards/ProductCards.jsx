import React, { useContext } from 'react'
import { createContecting } from '../../App'

const ProductCards = ({name,category,Image,price}) => {
  const {count,setCount} = useContext(createContecting)
  return (
    <div className='card mb-3 shadow-sm product-cards'>
     <img src={Image} alt={Image}className='card-img-top'/>
     <div className='card-body p-3'>
      <h5>{name}</h5>
      <h6>Rs {price}</h6>
      <h6 className='text-success mb-4'>{category}</h6>
      <button type='button' onClick={()=>setCount((curr)=>++curr)} className='btn btn-dark w-100 fw-bold'>Add to Cart{count}</button>
     </div>
    </div>
  )
}

export default ProductCards