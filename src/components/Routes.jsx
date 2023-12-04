import { Route } from 'wouter'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Products } from '../pages/Products'
//import { DetailProducts } from '../pages/DetailProduct'
import styled from 'styled-components'

export function Routes() {
  return (
    <Main>
      <Route path='/' children={Home} />
      <Route path='/login' children={Login} />
      <Route path='/product' children={Products} />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: auto;
  justify-content: center;
  margin-top: 80px;
`