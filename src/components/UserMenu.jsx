import styled from 'styled-components'
import { Picture } from '../style/topbar'
import { UserIconDefauld } from './icons/UserIconDefauld'
import { ExitIcon } from './icons/ExitIcon'
import { CardIcon } from './icons/CardIcon'
import { useState } from 'react'
import { Link } from 'wouter'
import { ToggleMebu } from './ToggleMenu'
import { useUser } from '../hook/useUser'
import { useLocation } from 'wouter'
import { useCart } from '../hook/useCart'
import { SeldIcon } from './icons/SeldIcon'

export function UserMenu({user}) {
  const [active, setActive] = useState(true)
  const [location, setLocation] = useLocation()
  const { hadelStorage } = useUser()
  const { getQuantity } = useCart()

  const inProduct = location === "/product"
  
  const handelCloseSesion = () => {
    hadelStorage({ action: "delete" })
    if (!inProduct) setLocation("/product")
  }
  const productQuantity = getQuantity()
  const status = user.status
  const isSuperUser = status !== "cliente" 
  
  return (
    <Picture onClick={() => setActive(!active)}>
      <UserIconDefauld />
      <ToggleMebu active={active} inProduct={inProduct}>
        <List>
          <Link href='./carrito'>
            <li>
              <ListBtn>
                Carrito
                <i><CardIcon /></i>
              </ListBtn>
            </li>
          </Link>
        {
          isSuperUser ? 
            (<Link href='./selds'>
            <li>
              <ListBtn>
                Ventas
                <i><SeldIcon /></i>
              </ListBtn>
            </li>
          </Link>): <></>
        }
          <li>
            <ListBtn onClick={handelCloseSesion}>
              Salir
              <i><ExitIcon /></i>
            </ListBtn>
          </li>
        </List>
      </ToggleMebu>
      {
        active 
        ?(inProduct 
          ?<ObjectCardInProduct>{productQuantity}</ObjectCardInProduct> 
          :<ObjectCard>{productQuantity}</ObjectCard>)
        :(inProduct
          ?<ObjectCardMenuInProduct>{productQuantity}</ObjectCardMenuInProduct>
          :<ObjectCardMenu>{productQuantity}</ObjectCardMenu>)
      }
    </Picture>
  )
}

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;

  && li{
    list-style:none;
    padding: 15px 20px;
    transition: .5s ease;

    &:hover{
      background-color: ${({ theme }) => theme.color.white};
      border-radius: 15px;
    }
  }
  `

const ListBtn = styled.button`
  color: #000;
  background-color: transparent;
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  `

const ObjectCard = styled.span`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  width: 20px;
  height: 25px;
  text-align: justify;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  position: absolute;
  bottom: 5%;
  right: 5%;
  border-radius: 50%;
  font-weight: 700;
  user-select: none;
  color: ${({ theme }) => theme.color.segundary};
`

const ObjectCardInProduct = styled(ObjectCard)`
  bottom: 30%;
`

const ObjectCardMenu = styled(ObjectCard)`
  bottom: -70%;
  right: 0;
`
const ObjectCardMenuInProduct = styled(ObjectCardMenu)`
  bottom: -30%;
`