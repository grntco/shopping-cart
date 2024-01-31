import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import cartIcon from '../../assets/icons/shopping-cart.svg'

const StyledLogo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;

    img {
        height: 1.6rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.025rem;
    }
`

const Logo = () => {
    return (
        <StyledLogo to='/'>
            <Icon src={cartIcon} alt='cart icon' />
            <p>EverCart</p>
        </StyledLogo>
    )
}

export default Logo
