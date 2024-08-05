import { SearchIcon } from './icons/SearchIcon'
import { HomeBtn } from './HomeBtn'
import { LoginBtn } from './LoginBtn'
import { UserMenu } from './UserMenu'
import { FilterProducts } from './FilterProducts'
import { BtnSearch, Header, InputSearch, NavBar, Search, SearchField } from '../style/topbar'
import { useState } from 'react'
import { useProducts } from '../hook/useProducts'
import { useFilter } from '../hook/useFilter'
import { useLocation } from 'wouter'
import { searchElement, reduceElement } from '../service/servicesElement'
import { useUser } from '../hook/useUser'

export function TopBar() {
  const [search, setSearch] = useState("")
  const { setFilters } = useFilter()
  const { hadelStorage } = useUser()
  
  const user = hadelStorage({action:"read"})
  const handleInputSearch = (event) => {
    setSearch(event.target.value)
  }
  const product = useProducts()
  const [location, setLocation] = useLocation()

  const handleSearch = (event) => {
    event.preventDefault()

    const componentProducto = product.map(prod => prod.componente)
    const nombreProducto = product.map(prod => prod.nombre_producto)

    const searchComp = searchElement({
      elem: componentProducto, search
    })

    const searchNomb = searchElement({
      elem: nombreProducto, search
    })

    const componente = reduceElement({ element: searchComp })

    const nombreProd = reduceElement({ element: searchNomb })
    
    const finder = nombreProd[0] !== componente[0] ?
    nombreProd.concat(componente) : nombreProd
    
    setFilters(prevState => ({
      ...prevState,
      finder
    }))
    if(location !== "/product") setLocation("/product")
  }

  return (
    <Header>
      <NavBar>
        <HomeBtn />
        <Search onSubmit={handleSearch}>
          <SearchField>
            <InputSearch onChange={handleInputSearch} />
            <BtnSearch>
              <SearchIcon />
            </BtnSearch>
          </SearchField>
          <FilterProducts />
        </Search>
        {!user ?
          <LoginBtn /> :
          <UserMenu user={user} />}
      </NavBar>
    </Header>
  )
}