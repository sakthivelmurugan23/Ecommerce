import React, { useContext } from 'react'
import ProductCards from './../../Components/Cards/ProductCards'
import { createContecting } from '../../App'
const AllProducts = () => {
  const {Products}= useContext(createContecting)
  return (
    <div className="container">
      <h1 className='mt-3 mb-3'>All Products</h1>
    <div className="row">
     {
      Products.map((productItem,index) =>(
       <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
         <ProductCards {...productItem}/>
       </div>
      ))
    }
     </div>
    </div>
  )
}

export default AllProducts