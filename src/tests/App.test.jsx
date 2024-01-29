import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../components/App'

describe('App component', () => {
    it('renders header, main, and footer', () => {
        render(<App />)
        expect(screen.getByRole('main')).toBeInTheDocument()
        // expect(screen.getByRole('main')).toBeInTheDocument()
        // expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
