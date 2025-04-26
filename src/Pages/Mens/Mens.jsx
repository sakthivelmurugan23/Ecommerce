import React, { useContext } from 'react'
import ProductCards from './../../Components/Cards/ProductCards'
import { createContecting } from '../../App'
const Mens = () => {
  const {menProducts} = useContext(createContecting)
  return (
    <div>
      <h1 className='mt-3 mb-3'>Mens products</h1>
      <div className="row">
     {
      menProducts.map((product,index) =>(
       <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
         <ProductCards {...product}/>
       </div>
      ))
    }
     </div>
    </div>
  )
}

export default Mens