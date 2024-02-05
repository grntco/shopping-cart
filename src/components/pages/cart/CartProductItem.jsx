// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'

const CartProductItem = ({ product }) => {
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
                <p>Quantity: {product.quantity}</p>
            </div>
        </StyledCartProductItem>
    )
}

const StyledCartProductItem = styled.li`
    display: flex;
    gap: 16px;
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
