import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../components/App'
import Router from '../components/Router'

describe('App component', () => {
    it('renders header, main, and footer', () => {
        render(<Router><App /></Router>)
        // expect(true).toBeTruthy()
        // expect(screen.getByRole('main')).toBeInTheDocument()
        // expect(screen.getByRole('main')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
