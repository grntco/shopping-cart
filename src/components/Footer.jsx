import { Link } from 'react-router-dom'
import Logo from './reusables/Logo'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 48px 96px;
    background-color: black;
`

const FooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const FooterLinkItem = styled.li`
    list-style: none;
`

const FooterLink = styled(Link)`
    color: white;
`

const Footer = () => {
    return (
        <StyledFooter data-testid='footer'>
            <Logo className='footer-logo' />
            <FooterLinks>
                <FooterLinkItem>
                    <FooterLink>Mens</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink>Womens</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink>Shoes</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink>Jewelry</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink>Electronics</FooterLink>
                </FooterLinkItem>
            </FooterLinks>
        </StyledFooter>
    )
}

export default Footer
