import styled from 'styled-components'

const StyledSingleProductPage = styled.section`
    border: 1px solid red;
    flex-grow: 1;
    padding: 48px 96px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const SingleProductPage = () => {
    return (
        <StyledSingleProductPage>
            <div>
                <img />
            </div>
            <div></div>
        </StyledSingleProductPage>
    )
}

export default SingleProductPage
