import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/icons/shopping-cart.svg'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px solid black;
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;

    &:hover {
        opacity: 0.6;
    }
`
const NavLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 2rem;
`

const Header = () => {
    return (
        <header data-testid='header'>
            <Nav>
                <NavLogo to='/'>
                    <img src={cartIcon} alt='cart icon' />
                    <p>CartMart</p>
                </NavLogo>
                <NavLinks>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            <img src={cartIcon} alt='cart icon' />
                        </NavLink>
                    </li>
                </NavLinks>
            </Nav>
        </header>
    )
}

export default Header
