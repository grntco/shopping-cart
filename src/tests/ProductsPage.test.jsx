// import ProductsPage from '../components/pages/products/ProductsPage'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../components/App'
// import userEvent from '@testing-library/user-event'
import ProductsPage from '../components/pages/products/ProductsPage'
import { BrowserRouter } from 'react-router-dom'

vi.mock('../hooks/useData.jsx', async () => {
    const actual = await vi.importActual('../hooks/useData.jsx')

    return {
        ...actual,
        data: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
        error: null,
        loading: false,
    }
})

describe('Products Filter Section Test', () => {
    it('Products Page renders ProductsFilterSection', () => {
        render(<ProductsPage />, { wrapper: BrowserRouter })
        screen.debug()
        expect(screen.getByTestId('products-filter-section')).toMatchSnapshot()
    })
})
