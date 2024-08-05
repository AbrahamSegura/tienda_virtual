import { useState } from 'react'
import products from '../moks/prodctos.json'

export function useSingleProduct(){
    
    const allProducts = products.map(({ data }) => data)[2]
    const [ product, setProduct ] = useState(allProducts)

    const searchProduct = ({idProd}) =>{
        const singleProduct = product.filter( prod => prod.id_catalogo === idProd)
        setProduct(singleProduct)
        return singleProduct
    }
    return { searchProduct }
}