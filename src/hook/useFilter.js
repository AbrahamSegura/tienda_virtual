import { useContext } from 'react'
import { FiltersContext } from '../context/filter'
import { deleteSpace } from '../service/servicesElement'

export const useFilter = () => { 
  const { setFilters, filters } = useContext(FiltersContext)
  
  function filterProducts(products) {
    return products.filter(product => {
      const ComponentWhitoutSpaces = deleteSpace(product.componente)
      const NameWhitoutSpaces = deleteSpace(product.nombre_producto)
      
      return (
        product.precio_divisa >= filters.minPrice 
        &&(
          filters.linea === 'all' ||
          product.linea === filters.linea
        ) 
        &&(
          filters.finder[0] === undefined ||
          filters.finder.includes(ComponentWhitoutSpaces)||
          filters.finder.includes(NameWhitoutSpaces)
        )
      ) 
    })
  }
  return { filters, filterProducts, setFilters }
}
