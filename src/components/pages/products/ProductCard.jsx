import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import starIcon from '../../../assets/icons/star.svg'
import Icon from '../../reusables/Icon'
import Button from '../../reusables/Button'
import { useState } from 'react'

const ProductCard = ({ product, handleAddToCart }) => {
    const [quantity, setQuantity] = useState(0)

    return (
        <StyledCard>
            <CardImageLink>
                <img
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                />
            </CardImageLink>
            <CardInfoContainer>
                <CardInfo>
                    <Link>
                        <h4>{product.title}</h4>
                    </Link>
                    <CardInfoRating>
                        <Icon src={starIcon} alt='star icon' />
                        <p>{product.rating.rate}</p>
                    </CardInfoRating>
                </CardInfo>
                <CardInfo>
                    <div>
                        <Button onClick={handleDecrementQuantity}>-</Button>
                        <Input value={quantity} />
                        <Button onClick={handleIncrementQuantity}>+</Button>
                    </div>
                    <p>${product.price}</p>
                </CardInfo>
                <Button
                    onClick={() => {
                        handleAddToCart(product)
                    }}
                >
                    Add to Cart
                </Button>
            </CardInfoContainer>
        </StyledCard>
    )

    function handleIncrementQuantity() {
        setQuantity(quantity + 1)
    }

    function handleDecrementQuantity() {
        if (quantity > 0) setQuantity(quantity - 1)
    }
}

const StyledCard = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 24px;
`

const CardImageLink = styled(Link)`
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    max-width: 336px;

    img {
        width: 100%;
    }
`

const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const CardInfoRating = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductCard
