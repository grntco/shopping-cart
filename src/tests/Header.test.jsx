import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import Router from '../components/Router'

describe('Header renders', () => {
    render(
        <Router>
            <Header />
        </Router>,
    )
    it('renders header element', () => {
        expect(screen.getByTestId('header')).toMatchSnapshot()
    })
})
