import { useContext } from "react"
import { CartContex } from "../context/cart"

export const useCart = () =>{
    const cartContext = useContext(CartContex)
    if(cartContext === undefined) throw new Error("no Context")
    return  cartContext
}