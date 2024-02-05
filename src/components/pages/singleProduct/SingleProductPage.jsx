import styled from 'styled-components'
import useData from '../../../hooks/useData'
import LoadingPage from '../loading/LoadingPage'
import ProductQuantitySelector from '../../reusables/ProductQuantitySelector'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'

const SingleProductPage = ({ id, handleAddToCart }) => {
    const { data, error, loading } = useData(`/products/${id}`)

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    return (
        <StyledSingleProductPage>
            <div>
                <img src={data.image} alt={data.title} />
            </div>
            <ProductInfoContainer>
                <ProductMetaData>
                    <div>SKU: {data.id}</div>
                    <div>Category: {data.category}</div>
                </ProductMetaData>
                <ProductPrimaryInfo>
                    <h1>{data.title}</h1>
                    <div>{formatToUSD(data.price)}</div>
                </ProductPrimaryInfo>
                <p>{data.description}</p>
                <ProductQuantitySelector
                    product={data}
                    handleAddToCart={handleAddToCart}
                />
            </ProductInfoContainer>
        </StyledSingleProductPage>
    )
}

const StyledSingleProductPage = styled.section`
    flex-grow: 1;
    padding: 48px 96px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 48px;

    img {
        max-width: 448px;
    }
`

const ProductInfoContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ProductMetaData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-transform: uppercase;
    font-weight: 900;
    color: grey;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
`

const ProductPrimaryInfo = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;

    div {
        font-size: 1.5rem;
    }
`    

SingleProductPage.propTypes = {
    id: PropTypes.number,
    handleAddToCart: PropTypes.func.isRequired,
}

export default SingleProductPage
