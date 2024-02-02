// import { Link } from "react-router-dom"
// import useProducts from '../../../hooks/useProducts'
import useData from '../../../hooks/useData'
// import styled from 'styled-components'
import ProductsFilterSection from './ProductsFilterSection'
import ProductsGrid from './ProductsGrid'
import LoadingPage from '../loading/LoadingPage'
import PropTypes from 'prop-types'

const ProductsPage = ({ handleAddToCart }) => {
    const { data, error, loading } = useData('/products')

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    console.log(data)

    return (
        <>
            <ProductsFilterSection />
            <ProductsGrid
                products={data}
                handleAddToCart={handleAddToCart}
            />
        </>
    )
}

ProductsPage.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductsPage
