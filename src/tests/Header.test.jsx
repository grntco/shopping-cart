import { describe, it, expect } from 'vitest'
import { waitFor, render, screen } from '@testing-library/react'
import Header from '../components/Header'
import Router from '../components/Router'
import userEvent from '@testing-library/user-event'
import App from '../components/App'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
    it('renders header element', () => {
        render(
            <Router>
                <Header />
            </Router>,
        )
        expect(screen.getByTestId('header')).toMatchSnapshot()
    })

    it.skip('Products link navigates to Products page', async () => {
        const user = userEvent.setup()

        render(
            <Router>
                <App />
            </Router>,
        )

        const productsLink = screen.getByRole('link', { name: 'Products' } )
        expect(productsLink.href).toContain('/products')

        await user.click(productsLink)

        expect(screen.getByTestId('products-grid')).toBeInTheDocument()
        // expect(window.location.pathname).toBe('/products')
    })

    it.skip('Cart icon link navigates to cart page', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        )
        const user = userEvent.setup()
        const cartLink = screen.getByTestId('header__cart-link')

        expect(cartLink.href).toContain('/cart')

        await user.click(cartLink);

        expect(screen.getByRole('heading', { name: 'Your Cart' })).toBeInTheDocument()
        expect(window.location.pathname).toBe('/cart')
    })
})
