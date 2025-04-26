import { BrowserRouter,Routes,Route } from "react-router-dom"
import AllProducts from './Pages/All/AllProducts';
import Men from './Pages/Mens/Mens'
import Women from './Pages/Womens/Womens'
import Navbar from "./Components/Navbar/Navbar"
import { createContext, useState } from "react";

export const createContecting = createContext()

function App() {
  const [count,setCount] = useState(0)
 const Products = [
  {
    name: "Classic Blue Jeans",
    category: "Clothing",
    gender: "Men",
    Image:'https://5.imimg.com/data5/NC/WM/YM/SELLER-90883355/cotton-fancy-casual-shirt-for-men-500x500.jpg',
    price:900
  },
  {
    name: "Elegant Handbag",
    category: "Accessories",
    gender: "Women",
    Image:"https://www.hancockfashion.com/cdn/shop/files/14053Black_8.jpg?v=1734412115",
    price:650
  },
  {
    name: "Unisex Running Shoes",
    category: "Footwear",
    gender: "Men",
    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJzCFM9gH2BqivmUKKUOz6ai6Q5cuP9Fi-w&s',
    price:740
  },
  {
    name: "Floral Summer Dress",
    category: "Clothing",
    gender: "Women",
    Image:"https://assets.ajio.com/medias/sys_master/root/20240312/EUNQ/65f02cf905ac7d77bbac6841/-473Wx593H-467158549-blue-MODEL.jpg",
    price:840

  },
  {
    name: "Leather Wallet",
    category: "Accessories",
    gender: "Men",
    Image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/7978889/2018/12/13/0db9ffeb-4a56-4b6c-a915-de901a196ea01544680199774-Red-Solid-Slim-Fit-Casual-Shirt-6711544680198449-1.jpg',
    price:1000
  },
  {
    name: "Stylish Sandals",
    category: "Footwear",
    gender: "Women",
    Image:'https://mehakboutique.com/cdn/shop/files/readymade-salwar-suit-kbd3006_6c575a4c-0fbe-4ab9-9c98-224846efd047_1024x1024@2x.jpg?v=1730723160',
    price:800
  },
  {
    name: "Graphic T-Shirt",
    category: "Clothing",
    gender: "Men",
    Image:'https://tigc.in/cdn/shop/files/compress_0620-sh44-1-emerald-green__1.jpg?v=1720764778',
    price:1040
  },
  {
    name: "Evening Gown",
    category: "Clothing",
    gender: "Women",
    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS426zBsRIzUFNAEOsUtu8wLKsYVweR8k1_mQ&s',
    price:1200
  }
]
  

const menProducts = Products.filter((item)=>(item.gender==='Men'))
const WomenProducts = Products.filter((item)=>(item.gender==='Women'))
  return (
    <>
  <BrowserRouter>
  <createContecting.Provider value={{Products,menProducts,WomenProducts,count,setCount}}>
  <Navbar/>
    <div className='container'>
    <Routes>
    <Route path="/" element={<AllProducts />}/>
    <Route path="/mens" element={<Men/>}/>
    <Route path="/womens" element={<Women/>}/>
  </Routes>
    </div>
  </createContecting.Provider>
  </BrowserRouter>

 
    </>
  )
}

export default App