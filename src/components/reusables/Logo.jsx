import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/icons/shopping-cart.svg'

const StyledLogoLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 2rem;

    &:hover {
        opacity: 0.6;
    }
`

const Logo = () => {
    return (
        <StyledLogoLink to='/'>
            <img src={cartIcon} alt='cart icon' />
            <p>CartMart</p>
        </StyledLogoLink>
    )
}

export default Logo
