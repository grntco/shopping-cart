import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import Router from '../components/Router'
import userEvent from '@testing-library/user-event'
import App from '../components/App'

describe('Header renders', () => {
    it('renders header element', () => {
        render(
            <Router>
                <Header />
            </Router>,
        )
        expect(screen.getByTestId('header')).toMatchSnapshot()
    })

    it.skip('logo link takes you to home page', async () => {
        const user = userEvent.setup()
        render(
            <Router>
                <App />
            </Router>,
        )
        const logo = screen.getByTestId('nav-logo')

        await user.click(logo)

        expect(screen.getByTestId('home-page-title').textContent).toMatch(/home page/i)
    })
})
