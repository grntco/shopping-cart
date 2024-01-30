import { Link } from "react-router-dom"
import useProducts from "../../../hooks/useProducts"

const ProductsPage = () => {
    const { products, error, loading } = useProducts()

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <p>Loading...</p>

    console.log(products)
    return (
        <>
            <h1>Products Page</h1>
            <Link to='/'>Go home?</Link>
        </>
    )
}

export default ProductsPage
