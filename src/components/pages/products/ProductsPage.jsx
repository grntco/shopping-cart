// import { Link } from "react-router-dom"
// import useProducts from '../../../hooks/useProducts'
import useData from '../../../hooks/useData'
// import styled from 'styled-components'
import ProductsFilterSection from './ProductsFilterSection'
import ProductsGrid from './ProductsGrid'
import LoadingPage from '../loading/LoadingPage'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ProductsPage = ({ handleAddToCart }) => {
    const { data, error, loading } = useData('/products')
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (data) setProducts(data)
    }, [data])

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    return (
        <>
            <ProductsFilterSection
                handleCategoryChange={handleCategoryChange}
            />
            <ProductsGrid
                products={products}
                handleAddToCart={handleAddToCart}
            />
        </>
    )

    function handleCategoryChange(e) {
        const newCategory = e.target.value

        if (newCategory === 'all') {
            setProducts(data)
        } else {
            setProducts(
                data.filter((product) => product.category === newCategory),
            )
        }
    }
}

ProductsPage.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductsPage
