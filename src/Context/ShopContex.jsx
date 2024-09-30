import React, { createContext } from "react";
import all_product from "../Componets/Assets/all_product";


export const ShopContext= createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product}
    return (
       <ShopContext.Provider>
        {props.children}
       </ShopContext.Provider> 
    )
}
export default ShopContextProvider;