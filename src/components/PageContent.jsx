import { useParams } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ProductsPage from './pages/products/ProductsPage'
import CartPage from './pages/cart/CartPage'
import styled from 'styled-components'

const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
`

const PageContent = () => {
    const { name } = useParams()

    return (
        <StyledMain>
            {name === 'products' ? (
                <ProductsPage />
            ) : name === 'cart' ? (
                <CartPage />
            ) : (
                <HomePage />
            )}
        </StyledMain>
    )
}

export default PageContent
