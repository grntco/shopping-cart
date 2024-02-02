import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import starIcon from '../../../assets/icons/star.png'
import Icon from '../../reusables/Icon'
import Button from '../../reusables/Button'
import { useState } from 'react'

const ProductCard = ({ product, handleAddToCart }) => {
    const [quantity, setQuantity] = useState(1)
    const productPagePath = `/products/${product.id}`

    return (
        <StyledCard>
            <CardImageLink to={productPagePath}>
                <img
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                />
            </CardImageLink>
            <CardInfoContainer>
                <CardInfoSection>
                    <Link to={productPagePath}>
                        <h4>{product.title}</h4>
                    </Link>
                    <CardInfoRating>
                        <Icon src={starIcon} alt='star icon' />
                        <p>{product.rating.rate}</p>
                    </CardInfoRating>
                </CardInfoSection>
                <CardInfoSection>
                    <CardAdjustCountContainer>
                        <Button onClick={handleDecrement}>–</Button>
                        <input
                            type='number'
                            value={quantity}
                            onChange={handleInputChange}
                        />
                        <Button onClick={handleIncrement}>+</Button>
                    </CardAdjustCountContainer>
                    <p>${product.price}</p>
                </CardInfoSection>
                <Button
                    onClick={() => {
                        handleAddToCart(product, quantity)
                    }}
                >
                    Add to Cart
                </Button>
            </CardInfoContainer>
        </StyledCard>
    )

    function handleIncrement() {
        setQuantity(parseInt(quantity) + 1)
    }

    function handleDecrement() {
        if (quantity > 1) setQuantity(parseInt(quantity) - 1)
    }

    function handleInputChange(e) {
        setQuantity(e.target.value)
    }
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    max-width: 336px;
`

const CardImageLink = styled(Link)`
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    img {
        width: 100%;
    }
`

const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
        font-size: 1rem;
        font-weight: 500;
    }
`

const CardInfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 8px;
`

const CardAdjustCountContainer = styled.div`
    height: 2rem;
    display: flex;
    gap: 2px;

    input {
        width: 2rem;
        text-align: center;
        border: none;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    Button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        font-size: 1.2rem;
    }
`

const CardInfoRating = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2px;
`

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductCard
