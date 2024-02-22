import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
// import Header from '../components/Header'
// import Router from '../components/Router'
// import userEvent from '@testing-library/user-event'
// import App from '../components/App'
import ProductCard from '../components/pages/products/ProductCard'
import { BrowserRouter } from 'react-router-dom'

const mockProduct = {
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
}

describe('Product Card test', () => {
    it('Product card renders correctly', () => {
        render(
            <ProductCard product={mockProduct} handleAddToCart={() => {}} />,
            { wrapper: BrowserRouter },
        )
        expect(screen.getByTestId('product-card')).toBeInTheDocument()
        expect(screen.getByTestId('product-card')).toMatchSnapshot()
    })
})
