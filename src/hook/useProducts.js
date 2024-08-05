import { useEffect, useState } from "react";
import { useFilter } from "./useFilter";
import product from "../moks/prodctos.json";

export function useProducts() {
  const { filterProducts, filters } = useFilter();
  const allProducts = product.map(({ data }) => data)[2];
  const [products, setProducts] = useState(allProducts);
  useEffect(() => {
    const prodFilt = filterProducts(allProducts);
    setProducts(prodFilt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.minPrice, filters.linea, filters.finder]);

  return products;
}
