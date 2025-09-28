import {  Grid } from "@chakra-ui/react"
import { ProductCard } from "../components/productCard"
import { useEffect, useState } from "react"
import axios from "axios"
import type { IProduct } from "@/interfaces"
const  ProductsPage= () => {

    const [prodList, setProdLis] = useState<IProduct[]>([])

    useEffect( () => {
        ( () => {
            axios
            .get("http://localhost:1337/api/products")
            .then(res => setProdLis(res.data.data))
            .catch(err => console.log(err))
        })()

    }, [])

  return (
   <Grid margin={30} gap={6} templateColumns={"repeat(auto-fill,minmax(300px,1fr))"}>
    {prodList.map((prod) => <ProductCard key={prod.id} product={prod}/>)}
   </Grid>
  )
}

export default ProductsPage