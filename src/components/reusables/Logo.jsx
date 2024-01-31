import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/icons/shopping-cart.svg'

const StyledLogoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;
`

const LogoText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
`

const Logo = () => {
    return (
        <StyledLogoLink to='/'>
            <img src={cartIcon} alt='cart icon' />
            <LogoText>CartMart</LogoText>
        </StyledLogoLink>
    )
}

export default Logo
