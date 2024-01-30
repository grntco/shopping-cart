import { useParams } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import styled from 'styled-components'


const StyledMain = styled.main`
    min-height: 90vh;
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
                <h1 data-testid="home-page-title">Home Page</h1>
            )}
        </StyledMain>
    )
}

export default PageContent
