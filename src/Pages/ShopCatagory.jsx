import React, { useContext } from 'react'
import './ShopCatagory.css'
import { ShopContext } from '../Context/ShopContex'
import Item from '../Componets/Item/Item'


const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-catagory'>
       <img className='shopcategory-banner' src={props.banner} width={"1340px"} margin-top={"100px"}/>
       <div className="shopcatagory-indexSort">
        <p>
          <span>showing 1-12</span>out of 36 Product
        </p>
        </div>
        <div className="shopcategory-products">
         {all_product.map((item,i)=>{
           if (props.category===item.category) {
             return <Item />
             
           }
         })}
        </div>
       </div>
   
  )
}

export default Shopcategory;

