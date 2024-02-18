import { Link } from 'react-router-dom'
import Logo from './reusables/Logo'
import ghIcon from '../assets/icons/github-mark.svg'
import Icon from './reusables/Icon'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter data-testid='footer'>
            <PrimaryFooter>
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
            </PrimaryFooter>
            <AttributionContainer>
                <a
                    href='https://github.com/grntco'
                    target='_blank'
                    rel='noreferrer'
                >
                    Made by grntco
                    <Icon src={ghIcon} alt="github icon" />
                </a>
            </AttributionContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    color: var(--tertiary-txt-color);
    background-color: var(--tertiary-bg-color);
`

const PrimaryFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 48px 96px;
`

const AttributionContainer = styled.div`
    align-self: center;
    padding-bottom: 8px;

    a {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--tertiary-txt-color);
        text-decoration: none;
    }
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

export default Footer
