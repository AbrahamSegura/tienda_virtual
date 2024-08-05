import {
  CardFooter,
  CardHeader,
  CardImage,
  Cards, 
  ContCantidad,
  Form, 
  InputForm,
  Img,
  Information,
  LikeBtn,
  PriceRef, 
  SoldBtn,
  TitleProduct
} from '../style/card'
import { HeartIcon } from '../components/icons/HeartIcon'
import { useState } from 'react'
import { useLocation } from 'wouter'
import { useUser } from '../hook/useUser'
import { useCart } from '../hook/useCart'
import { useSingleProduct } from '../hook/useSingleProduct'

export function Card({
  srcImg,
  nombre_producto,
  nombre_sede,
  marca,
  precio_divisa,
  precio_local,
  id_cart
 }){
  const { hadelStorage } = useUser()
  const { searchProduct } = useSingleProduct()
  const [_location, setLocation] = useLocation()
  const { addCart } = useCart()
  const [quantity, setQuantity] = useState(0)

  const user = hadelStorage({action:"read"})
  const haddleSold = (event) =>{
    event.preventDefault()
    const idProd = event.target.id 
    if(!user) {
      setLocation("/login")
      return
    }else{
      const singleProduct = searchProduct({idProd})
      addCart({product:singleProduct[0], quantity})
    }

  }
  return (
    <Cards>
      <CardImage>
        <Img src={srcImg} alt="product" />
      </CardImage>
      <CardHeader>
        <TitleProduct>{nombre_producto}</TitleProduct>
        <LikeBtn>
          <HeartIcon />
        </LikeBtn>
      </CardHeader>
      <CardFooter>
        <Information>
          <b>Laboratorio: </b> {marca}
        </Information>
        <Information>
          <b>Ubicacion: </b> {nombre_sede}
        </Information>
        <Information>
          <b>Precio: </b> Bs{precio_local}
        </Information>
        <PriceRef>
          <b>Ref: </b> ${precio_divisa}
        </PriceRef>
        <Form id={id_cart} onSubmit={haddleSold}>
          <InputForm onClick={() => {
            if (quantity >= 1) setQuantity(quantity - 1)
          }} type="button" value="-" />
          <ContCantidad>{quantity}</ContCantidad>
          <InputForm onClick={() => setQuantity(quantity + 1)} type="button" value="+" />
          <SoldBtn type='submit'>AL CARRITO</SoldBtn>
        </Form>
      </CardFooter>
    </Cards>
  )
}