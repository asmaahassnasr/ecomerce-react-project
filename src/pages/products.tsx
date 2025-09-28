import {  Grid } from "@chakra-ui/react"
import { ProductCard } from "../components/productCard"
import axios from "axios"
import type { IProduct } from "@/interfaces"
import { useQuery } from "@tanstack/react-query"
const  ProductsPage= () => {

    const getProductsList = async ()=> {
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`);
        return data
    }

  const qry = useQuery({ queryKey: ['products'], queryFn: getProductsList })

  if(qry.isLoading) return <h3>Loading .....</h3>

  return (
   <Grid margin={30} gap={6} templateColumns={"repeat(auto-fill,minmax(300px,1fr))"}>
    {qry.data.data.map((prod:IProduct) => <ProductCard key={prod.id} product={prod}/>)}
   </Grid>
  )
}

export default ProductsPage