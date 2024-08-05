/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-children-prop */
import { Route } from 'wouter'
import { Home } from './Home'
import { Login } from './Login'
import { Products } from './Products'
import { CardPage } from './CardPage'
import { SeldTable } from './SeldTable'
import { FormBuy } from './FormBuy'
import styled from 'styled-components'
import { useProducts } from '../hook/useProducts'
import { useUser } from '../hook/useUser'

export function Routes() {
  const products = useProducts()
  const { hadelStorage } = useUser()
  const user = hadelStorage({action:"read"})
  return (
    <Main>
      // eslint-disable-next-line react/no-children-prop
      <Route path='/' children={Home} />
      <Route path='/login' children={Login} />
      <Route path='/product'>
          <Products products={products}/>
      </Route>
      <Route path='/carrito'>
        <CardPage user={user} />
      </Route>
      <Route path='/seld' children={SeldTable} />
      <Route path='/buy' children={FormBuy}/> 
    </Main>
  )}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: auto;
  justify-content: center;
  margin-top: 80px;
`