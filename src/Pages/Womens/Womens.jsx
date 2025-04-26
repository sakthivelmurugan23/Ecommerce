import React from 'react'
import ProductCards from './../../Components/Cards/ProductCards'
const Women = ({WomenProducts}) => {
  
  return (
    <div>
      <h1 className='mt-3 mb-3'>Women products</h1>
      <div className="row">
     {
      WomenProducts.map((product,index) =>(
       <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
         <ProductCards {...product}/>
       </div>
      ))
    }
     </div>
    </div>
  )
}

export default Women