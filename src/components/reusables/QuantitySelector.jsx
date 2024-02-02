import styled from 'styled-components'
import Button from './Button'
import { useState } from 'react'

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <StyledQuantitySelector>
                <Button onClick={handleDecrement}>–</Button>
                <input
                    type='number'
                    value={quantity}
                    onChange={handleInputChange}
                />
                <Button onClick={handleIncrement}>+</Button>
            </StyledQuantitySelector>

        </>
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

const StyledQuantitySelector = styled.div`
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

export default QuantitySelector
