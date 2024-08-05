import { useDollarValue } from "../hook/useDollarValue"
import { Card } from '../components/Card'
import { CardList } from '../style/card'
import { Pagination } from "../components/Pagination"
import { useFilter } from "../hook/useFilter"
import { useEffect, useState } from "react"

export function Products({products}) {

  const { filters, setFilters } = useFilter()
  
  const {changeFromDollar} = useDollarValue()

  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    setTotalItems(products.length)
  }, [products])

  
  const indexPage = filters.index
  const firsValue = (indexPage * 20) - 20
  const lastValue = indexPage * 20
  const itemsPerPage = 20

  const paginate = pageNumber => setFilters(prevState => ({
    ...prevState,
    index: Number(pageNumber)
  }))
  const elem = products.slice(firsValue, lastValue).map(data => {
    const { id_catalogo, link_img, marca, nombre_producto, precio_divisa, nombre_sede } = data
    const srcImg = String(link_img).split(",")

    return (
      <Card
        key={id_catalogo}
        marca={marca}
        nombre_producto={nombre_producto}
        nombre_sede={nombre_sede}
        precio_divisa={precio_divisa}
        precio_local={changeFromDollar(Number(precio_divisa))}
        srcImg={srcImg[0]}
        id_cart={id_catalogo}
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