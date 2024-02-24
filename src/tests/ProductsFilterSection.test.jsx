import { describe, it, expect, vi } from 'vitest'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import useData from '../hooks/useData'
import ProductsFilterSection from '../components/pages/products/ProductsFilterSection'

vi.mock('../hooks/useData', () => ({
    __esModule: true,
    default: vi.fn(),
}))

const mockCategories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
]

describe('Products Filter Section test', () => {
    it('renders error message when data is null', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: true, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection />)
        })

        expect(
            screen.getByText('An error occurred. Please check back later.'),
        ).toBeInTheDocument()
    })

    it('renders skeleton loading text when data is null and loading is true', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: false, loading: true }
        })

        act(() => {
            render(<ProductsFilterSection />)
        })

        expect(screen.getByTestId('skeleton-loading-text')).toBeInTheDocument()
    })

    it('renders correctly when data is available and loading is false', async () => {
        useData.mockImplementation(() => {
            return { data: mockCategories, error: false, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection />)
        })

        expect(
            screen.getByTestId('products-filter-section'),
        ).toBeInTheDocument()
        expect(screen.getByTestId('products-filter-section')).toMatchSnapshot()
    })
})
