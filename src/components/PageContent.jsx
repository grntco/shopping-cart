import { useParams } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

const PageContent = () => {
    const { name } = useParams()

    return (
        <main>
            {name === 'products' ? (
                <ProductsPage />
            ) : name === 'cart' ? (
                <CartPage />
            ) : (
                <div>Home Page</div>
            )}
        </main>
    )
}

export default PageContent
