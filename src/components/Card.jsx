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

export function Card({
  srcImg,
  nombre_producto,
  nombre_sede,
  marca,
  precio_divisa,
  precio_local
 }){
  const user = undefined
  const [location, setLocation] = useLocation()
  const [cantidad, setCantidad] = useState(0)
  const haddleSold = (event) =>{
    event.preventDefault()
    if(!user) {
      setLocation("/login")
      return
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
        <Form onSubmit={haddleSold}>
          <InputForm onClick={() => {
            if (cantidad >= 1) setCantidad(cantidad - 1)
          }} type="button" value="-" />
          <ContCantidad>{cantidad}</ContCantidad>
          <InputForm onClick={() => setCantidad(cantidad + 1)} type="button" value="+" />
          <SoldBtn type='submit'>COMPRAR</SoldBtn>
        </Form>
      </CardFooter>
    </Cards>
  )
}