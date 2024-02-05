import styled from 'styled-components'
import heroImage from '../../../assets/images/hero-image.jpg'
import ButtonLink from '../../reusables/buttons/ButtonLink'

const HeroSection = styled.section`
    background-image: ${`url(${heroImage})`};
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
    flex-grow: 1;
    padding: 48px 96px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        font-size: clamp(1.2rem, 10vw, 5rem);
        font-style: italic;
        text-transform: uppercase;
        font-weight: 900;
        color: white;
        span {
            color: #e964b6;
        }
    }
`

const HomePage = () => {
    return (
        <HeroSection>
            <h1>
                <span>Ever</span>ything You Could
                <br />
                <span>Ever</span> Ask For
            </h1>
            <ButtonLink to='/products'>Shop Collection</ButtonLink>
        </HeroSection>
    )
}

export default HomePage
