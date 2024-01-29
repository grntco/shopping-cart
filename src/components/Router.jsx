import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import NotFound from './NotFound'
import ProductsPage from './ProductsPage'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />
        },
        {
            path: '/products',
            element: <ProductsPage />
        },
    ])

    return <RouterProvider router={router} />
}

export default Router
