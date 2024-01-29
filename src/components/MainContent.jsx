import { useParams } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'

const MainContent = () => {
    const { name } = useParams()

    return (
        <main>
            {name === 'products' ? <ProductsPage /> : <div>Home Page</div>}
        </main>
    )
}

export default MainContent
