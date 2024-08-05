import { usePrices } from '../hook/usePrices'
import { Filter, OptionFilter, RangeFilter, SelectFilter,N } from '../style/topbar'
import { useLocation } from 'wouter'
import { useFilter } from '../hook/useFilter'

export function FilterProducts() {

  const { filters, setFilters } = useFilter()
  const maxPrecio = usePrices()
  const [location] = useLocation()

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

  if (location === '/product') {
    return (
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
          <OptionFilter value="medicina_blister">Blisters</OptionFilter>
          <OptionFilter value="miselanios">Miselanios</OptionFilter>
          <OptionFilter value="psicotropico">Psicotropicos</OptionFilter>
        </SelectFilter>
      </Filter>

    )
  } else {
    return <N />
  }
}