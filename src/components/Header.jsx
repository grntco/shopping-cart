import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/icons/shopping-cart.svg'
import Logo from './reusables/Logo'

const Header = () => {
    return (
        <header data-testid='header'>
            <Nav>
                <Logo />
                <NavLinks>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' data-testid='header__cart-link'>
                            <img src={cartIcon} alt='cart icon' />
                        </NavLink>
                    </li>
                </NavLinks>
            </Nav>
        </header>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 96px 24px 48px;
    border-bottom: 1px solid black;
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 48px;
    list-style: none;
`

const NavLink = styled(Link)`
    font-size: 1.2rem;
`

export default Header
