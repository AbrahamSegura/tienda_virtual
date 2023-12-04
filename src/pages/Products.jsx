import { useDollarValue } from "../hook/useDollarValue"
import product from '../moks/prodctos.json'
import { Card } from '../components/Card'
import { CardList } from '../style/card'
import { Pagination } from "../components/Pagination"
import { useFilter } from "../hook/useFilter"
import { useEffect, useState } from "react"

export function Products(){
    
  const products = product.map(({ data }) => data)[2]
  const { filterProducts, filters, setFilters } = useFilter()
  const dollar = useDollarValue()
  const filtProd = filterProducts(products)
  
  const indexPage = filters.index
  const firsValue = (indexPage * 20) - 20
  const lastValue = indexPage * 20
  
  const [totalItems, setTotalItems] = useState(0)
  useEffect(()=>{
    setTotalItems(filtProd.length)
  },[filtProd])

  const itemsPerPage = 20
  
  const paginate = pageNumber => setFilters(prevState => ({
    ...prevState,
    index: Number(pageNumber)
  }))
  
  const elem = filtProd.slice(firsValue, lastValue).map( data => {
    const { id_catalogo, link_img, marca, nombre_producto, precio_divisa, nombre_sede } = data
    const srcImg = String(link_img).slice(",")
    return (
    <Card
    key={id_catalogo}
    marca={marca}
    nombre_producto={nombre_producto}
    nombre_sede={nombre_sede}
    precio_divisa={precio_divisa}
    precio_local={(precio_divisa*dollar).toFixed(2)}
    srcImg={srcImg}
    />)
  })
  return (
    <>
      <CardList>
        {elem}
      </CardList>
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      /> 
    </>
  )
}