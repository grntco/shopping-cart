import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import ProductQuantitySelector from '../components/pages/products/ProductQuantitySelector'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

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

describe('Product Quantity Selector test', () => {
    it('Product Quantity Selector renders correctly', () => {
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        expect(
            screen.getByTestId('product-quantity-selector'),
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('product-quantity-selector'),
        ).toMatchSnapshot()
    })
})
