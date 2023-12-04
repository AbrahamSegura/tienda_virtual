import { SearchIcon } from './icons/SearchIcon'
import { HomeBtn } from './HomeBtn'
import { LoginBtn } from './LoginBtn'
import { UserMenu } from './UserMenu'

import { useLocation } from 'wouter'
import { useFilter } from '../hook/useFilter'
import productos from '../moks/prodctos.json'
import { BtnSearch, 
        Filter, 
        Header, 
        InputSearch, 
        NavBar, 
        OptionFilter, 
        RangeFilter, 
        Search, 
        SearchField,
        SelectFilter } from '../style/topbar'

export function TopBar() {
  const User = undefined
  const producto = productos.map(({ data }) => data)[2]
  const precios = producto.map(data => data.precio_divisa)
  const maxPrecio = Math.max.apply(null, precios)
  const [location] = useLocation()
  const { filters, setFilters } = useFilter()
  const handelChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }
  const handelCategoty = (event) => {
    setFilters(prevState => ({
      ...prevState,
      linea: event.target.value
    }))
  }
  return (
    <Header>
      <NavBar>
        <HomeBtn />
        <Search>
          <SearchField>
            <InputSearch type="search" />
            <BtnSearch>
              <SearchIcon />
            </BtnSearch>
          </SearchField>
          {location === '/product' ?
            <Filter>
              <div>
                <label htmlFor="precio_minimo"> Precio Minimo</label>
                <RangeFilter
                  id='precio_minimo'
                  value={filters.minPrice}
                  onChange={handelChange} max={maxPrecio} name='min_price' min={0} />
                <span>${filters.minPrice}</span>
              </div>
              <SelectFilter name='categ' onChange={handelCategoty}>
                <OptionFilter value="all">Todo</OptionFilter>
                <OptionFilter value="medicina_general">Medicamentos</OptionFilter>
                <OptionFilter value="medicina_bister">Blister</OptionFilter>
                <OptionFilter value="alimentos">Comida</OptionFilter>
                <OptionFilter value="psicotropico">Psicotropicos</OptionFilter>
              </SelectFilter>
            </Filter>
            : null}
        </Search>
        {User !== undefined ?
          <LoginBtn /> :
          <UserMenu />}
      </NavBar>
    </Header>
  )
}