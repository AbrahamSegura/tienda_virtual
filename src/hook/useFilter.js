import { useContext } from 'react'
import { FiltersContext } from '../context/filter'

export const useFilter = () => { 
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.precio_divisa >= filters.minPrice 
        &&(
          filters.linea === 'all' ||
          product.linea === filters.linea
        ) && 
        (
          filters.componente === '' ||
          product.componente === filters.componente 
        )
      )
    })
  }
  return { filters, filterProducts, setFilters }
}

const categ = [ "medicina_general","medicina_bister","miselanios","alimentos","psicotropico"]