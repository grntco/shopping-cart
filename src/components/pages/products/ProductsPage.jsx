// import { Link } from "react-router-dom"
import useProducts from '../../../hooks/useProducts'
// import styled from 'styled-components'
import ProductsGrid from './ProductsGrid'


const ProductsPage = () => {
    const { products, error, loading } = useProducts()

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <p>Loading...</p>

    console.log(products)
    return (
        <>
            <section>
              <h1>All Products</h1>
            </section>
            <ProductsGrid products={products}>

            </ProductsGrid>
        </>
    )
}

export default ProductsPage
