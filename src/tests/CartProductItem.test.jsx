import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CartProductItem from '../components/pages/cart/CartProductItem'

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

describe('Cart Product Item test', () => {
    it('renders correctly', () => {
        render(
            <CartProductItem
                product={mockProduct}
                handleDeleteFromCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        expect(screen.getByTestId('cart-product-item')).toBeInTheDocument()
        expect(screen.getByTestId('cart-product-item')).toMatchSnapshot()
    })
})
