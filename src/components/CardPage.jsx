import styled from "styled-components"
import { CardIcon } from "./icons/CardIcon"
import { SoldBtn } from "../style/card"
import { useCart } from "../hook/useCart"
import { useDollarValue } from "../hook/useDollarValue"
import { Link, useLocation } from "wouter"
import { CloseIcon } from "./icons/CloseIcon"

export function CardPage({ user }) {

  const [_location, setLocation] = useLocation()
  const { changeFromDollar } = useDollarValue()
  const { cart, getQuantity, removeFromCart } = useCart()
  const quantity = getQuantity()
  const rows = quantity > 0 ? cart.map((item, ind) => {
    const bolivarPrice = changeFromDollar(Number(item.precio_divisa))
    const iva = item.status === "exento" ? 0 : (bolivarPrice * 0.16).toFixed(2)
    const total = (Number(iva) + Number(bolivarPrice) * item.quantity).toFixed(2)
    if (ind % 2 !== 0) {
      return (
        <FirstTr key={item.id_catalogo}>
          <Td><CloseBtn onClick={() => removeFromCart(item)}><CloseIcon /></CloseBtn></Td>
          <Td>{item.nombre_producto}</Td>
          <Td>{item.presentacion_2}</Td>
          <Td>{item.nombre_sede}</Td>
          <Td>x{item.quantity}</Td>
          <Td>Bs.{bolivarPrice}</Td>
          <Td>Bs.{iva}</Td>
          <Td>Bs.{total}</Td>
        </FirstTr>
      )
    } else {
      return (
        <SecondTr key={item.id_catalogo}>
          <Td><CloseBtn onClick={() => removeFromCart(item)}><CloseIcon /></CloseBtn></Td>
          <Td>{item.nombre_producto}</Td>
          <Td>{item.presentacion_2}</Td>
          <Td>{item.nombre_sede}</Td>
          <Td>x{item.quantity}</Td>
          <Td>Bs.{bolivarPrice}</Td>
          <Td>Bs.{iva}</Td>
          <Td>Bs.{total}</Td>
        </SecondTr>
      )
    }
  })
    : <tr><th colSpan={8}>No hay productos en el carrito</th></tr>

  const totalFinal = cart.reduce((acc, el) => {
    const precio = Number(el.precio_divisa)
    const iva = precio * 0.16
    const subTotal = precio + iva
    const total = subTotal * el.quantity
    return acc + total
  }, 0)
  if (!user) setLocation("./login")
  return (
    <Section>
      <Title>Carrito de compras <CardIcon /></Title>
      <Table>
        <Caption>
          <Link href="./buy">
            <FactSoldBtn>COMPRAR</FactSoldBtn>
          </Link>
        </Caption>
        <TableHead>
          <tr>
            <th>Borrar</th>
            <th>Producto</th>
            <th>Presentacion</th>
            <th>Sede</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Iva</th>
            <th>Total</th>
          </tr>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
        <TableFood>
          <tr>
            <th colSpan={7} >Total a Pagar</th>
            <Td>Bs.{changeFromDollar(totalFinal)}</Td>
          </tr>
        </TableFood>
      </Table>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h2`
  margin: 25px 0;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  text-shadow: ${({ theme }) => theme.shadow.text};
`

const Table = styled.table`
  width: 75%;
  margin: auto;
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  text-align: start;
  `

const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  color:${({ theme }) => theme.color.white};
  text-shadow: ${({ theme }) => theme.shadow.text};
  `
const TableBody = styled.tbody`
  font-size: 18px;
  color: #000;
  `
const Td = styled.td.attrs({ scope: "row" })`
  border: 1px solid;
  padding: 5px 0;
  text-align: center;
  `
const FirstTr = styled.tr`
  background-color: ${({ theme }) => theme.color.shadowSegundary};
  `

const SecondTr = styled(FirstTr)`
  background-color: ${({ theme }) => theme.color.white};
  `

const Caption = styled.caption`
  padding: 10px;
  caption-side: bottom;
  `
const FactSoldBtn = styled(SoldBtn)`
  width: 25%;
  padding: 10px 0px;
  font-size: 20px;
`

const TableFood = styled.tfoot`
  border-top: 2px solid;
  background-color: #dadadb
`
const CloseBtn = styled.button`
  font-size: 18px;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
`