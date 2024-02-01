import { useParams } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ProductsPage from './pages/products/ProductsPage'
import CartPage from './pages/cart/CartPage'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

const PageContent = ({ handleAddToCart }) => {
    const { name } = useParams()

    return (
        <StyledMain>
            {name === 'products' ? (
                <ProductsPage handleAddToCart={handleAddToCart} />
            ) : name === 'cart' ? (
                <CartPage />
            ) : (
                <HomePage />
            )}
        </StyledMain>
    )
}

PageContent.propTypes = {
    handleAddToCart: PropTypes.func.isRequired
}


export default PageContent
