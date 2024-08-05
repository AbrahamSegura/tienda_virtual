/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContex = createContext()

export function CartProvider({ children }) {
  const inicialValue = Array(0)
  const [cart, setCart] = useState(inicialValue)

  const getProductInCardIndex = (product) => cart.findIndex(item => item.id_catalogo === product.id_catalogo)

  const addCart = ({product, quantity}) => {
    const productInCardIndex = getProductInCardIndex(product)
    setCart(precState => precState.filter( item => item.quantity > 0))
    if (productInCardIndex >= 0) {
      if(quantity === 0){
        setCart(precState => precState.filter( item => item.quantity > 0))
        return  
      }
      const newCart = structuredClone(cart)
      newCart[productInCardIndex].quantity = quantity
      setCart(newCart)
      return
    }
    setCart( prevState =>(
      [
        ...prevState,
        {
          ...product,
          quantity
        }
      ]
    ))
    return
  }
  const clearCart = () => setCart(Array(0))

  const getQuantity = () => cart.length
  

  const getProductQuantity = (product) =>{
    const productInCardIndex = getProductInCardIndex(product)
    if(productInCardIndex >= 0){
      const singleProduct = cart[productInCardIndex]
      return singleProduct.quantity
    }
    return 1
  }

  const removeFromCart = (product) =>{
    setCart( prevState => prevState.filter( item => item.id_catalogo !== product.id_catalogo) )
  }
  return (
    <CartContex.Provider value={{
      cart,
      addCart,
      clearCart,
      getQuantity,
      getProductQuantity,
      removeFromCart
    }}>
      {children}
    </CartContex.Provider>
  )
}