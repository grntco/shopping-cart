// import { Link } from "react-router-dom"
import useProducts from '../../../hooks/useProducts'
// import styled from 'styled-components'
import ProductsGrid from './ProductsGrid'
import LoadingPage from '../loading/LoadingPage'
import PropTypes from 'prop-types'


const ProductsPage = ({ handleAddToCart }) => {
    const { products, error, loading } = useProducts()

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    console.log(products)
    return (
        <>
            <section>
                <h1>All Products</h1>
            </section>
            <ProductsGrid
                products={products}
                handleAddToCart={handleAddToCart}
            ></ProductsGrid>
        </>
    )
}

ProductsPage.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductsPage
