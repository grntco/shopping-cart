import { styled, keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #e964b6; /* Pink */
    border-radius: 50%;
    width: 96px;
    height: 96px;
    animation: ${spin} 1.5s linear infinite;
`

const StyledLoadingPage = styled.section`
    flex-grow: 1;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.5rem;
        font-weight: 700;
        color: #e964b6;
    }
`

const LoadingPage = () => {
    return (
        <StyledLoadingPage>
            <p>Loading...</p>
            <Spinner />
        </StyledLoadingPage>
    )
}

export default LoadingPage
