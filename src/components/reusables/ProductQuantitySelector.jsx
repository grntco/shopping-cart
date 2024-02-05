import styled from 'styled-components'
import Button from './Button'
import { useState } from 'react'
import PropTypes from 'prop-types'

const ProductQuantitySelector = ({ product, handleAddToCart }) => {
    const [quantity, setQuantity] = useState(1)

    return (
        <StyledQuantitySelector>
            <QuantityInputContainer>
                <Button onClick={handleDecrement}>–</Button>
                <input
                    type='number'
                    value={quantity}
                    onChange={handleInputChange}
                />
                <Button onClick={handleIncrement}>+</Button>
            </QuantityInputContainer>
            <Button
                onClick={() => {
                    handleAddToCart(product, quantity)
                }}
            >
                Add to Cart
            </Button>
        </StyledQuantitySelector>
    )

    function handleIncrement() {
        setQuantity(quantity + 1)
    }

    function handleDecrement() {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    function handleInputChange(e) {
        setQuantity(parseInt(e.target.value))
    }
}

const StyledQuantitySelector = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const QuantityInputContainer = styled.div`
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

ProductQuantitySelector.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductQuantitySelector
