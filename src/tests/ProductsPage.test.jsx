// import ProductsPage from '../components/pages/products/ProductsPage'
import { describe, it, expect, vi, importOriginal } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../components/App'
// import userEvent from '@testing-library/user-event'
import ProductsPage from '../components/pages/products/ProductsPage'
import ProductsGrid from '../components/pages/products/ProductsGrid'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import useDataMock from '../hooks/useData' // Adjust the path as needed

vi.mock('../hooks/useData.jsx', () => ({
    __esModule: true,
    default: async (path) => {
        // Mocked data
        if (path === '/products') {
            return Promise.resolve({
                data: [
                    {
                        id: 1,
                        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                        price: 109.95,
                        description:
                            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                        category: "men's clothing",
                        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                        rating: {
                            rate: 3.9,
                            count: 120,
                        },
                    },
                ],
                error: null,
                loading: false,
            })
        } else if (path === '/products/categories') {
            return Promise.resolve({
                data: [
                    'electronics',
                    'jewelery',
                    "men's clothing",
                    "women's clothing",
                ],
                error: null,
                loading: false,
            })
        } else {
            throw new Error(`Unexpected path: ${path}`)
        }
    },
}))

describe('Products Filter Section Test', () => {
    it('confirm data mocks properly', async () => {
        const result = await useDataMock('/products/categories')
        console.log(result)
    })

    it('Products Page renders ProductsGrid', async () => {
        render(<ProductsPage />, { wrapper: BrowserRouter })

        waitFor(() => {
            expect(
                screen.getByTestId('products-filter-section'),
            ).toBeInTheDocument()
        })

        // expect(screen.getByTestId('products-grid')).toBeInTheDocument()
    })
})
