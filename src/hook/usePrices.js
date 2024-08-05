import { useEffect, useState } from 'react'
import { useFilter } from './useFilter'
import { useProducts } from './useProducts'

export const usePrices =() => {
  const { filters } = useFilter()
  const [maxPrecio, setMaxPrecio] = useState(0) 
  const producto = useProducts()
  
  const precios = producto.map(data => data.precio_divisa)
  useEffect(()=>{
    const max = Math.max.apply(null, precios)
    setMaxPrecio(max)
  }, [filters.linea, precios])
  return maxPrecio
}
