import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/icons/shopping-cart.svg'
import Logo from './reusables/Logo'
import PropTypes from 'prop-types'

const Header = ({ cart }) => {
    return (
        <StyledHeader data-testid='header'>
            <Nav>
                <Logo />
                <NavLinks>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' data-testid='header__cart-link'>
                            <img src={cartIcon} alt='cart icon' />
                            {cart.length > 0 && (
                                <CartItemsNumber>
                                    <div>{cart.length}</div>
                                </CartItemsNumber>
                            )}
                        </NavLink>
                    </li>
                </NavLinks>
            </Nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 999;
`

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
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;
`

const CartItemsNumber = styled.div`
    position: absolute;
    top: -18px;
    right: -16px;
    height: 16px;
    min-width: 16px;
    padding: 4px 2px;
    border-radius: 50%;
    font-size: 0.7rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e964b6;
    color: white;

    div {
        margin-left: 1px;
    }
`

Header.propTypes = {
    cart: PropTypes.object,
}

export default Header
