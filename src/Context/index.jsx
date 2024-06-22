import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children})=>{
    // shopping Cart- Increment quantity
    const [count, setCount]=useState(0)

    // product detail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen]=useState(false)
    const openProductDetail=()=>setIsProductDetailOpen(true)
    const closeProductDetail=()=>setIsProductDetailOpen(false)

    // producto detail - show product
    const [productToShow, setProductToShow]=useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow, 
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
