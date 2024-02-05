// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'

const CartProductItem = ({ cart, product }) => {
    const quantity = cart.filter((item) => item === product).length

    return (
        <StyledCartProductItem>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
            </Link>
            <div>
                <Link to={`/products/${product.id}`}>
                    <h4>{product.title}</h4>
                </Link>
                <p>{formatToUSD(product.price)}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </StyledCartProductItem>
    )
}

const StyledCartProductItem = styled.li`
    display: flex;
    gap: 8px;
    padding: 12px 16px;

    a {
        cursor: pointer;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    img {
        max-width: 96px;
    }
`

CartProductItem.propTypes = {
    cart: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
}

export default CartProductItem
