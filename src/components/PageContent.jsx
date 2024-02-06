import { useParams } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ProductsPage from './pages/products/ProductsPage'
import CartPage from './pages/cart/CartPage'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SingleProductPage from './pages/singleProduct/singleProductPage'

const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

const PageContent = ({ cart, handleAddToCart, handleDeleteFromCart, handleQuantitySelectChange }) => {
    const params = useParams()

    return (
        <StyledMain>
            {params.name === 'products' ? (
                <ProductsPage handleAddToCart={handleAddToCart} />
            ) : params.name === 'cart' ? (
                <CartPage
                    cart={cart}
                    handleDeleteFromCart={handleDeleteFromCart}
                    handleQuantitySelectChange={handleQuantitySelectChange}
                />
            ) : params.id ? (
                <SingleProductPage
                    id={params.id}
                    handleAddToCart={handleAddToCart}
                />
            ) : (
                <HomePage />
            )}
        </StyledMain>
    )
}

PageContent.propTypes = {
    cart: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleDeleteFromCart: PropTypes.func.isRequired,
    handleQuantitySelectChange: PropTypes.func.isRequired,
}

export default PageContent
