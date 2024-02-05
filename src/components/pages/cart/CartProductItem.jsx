// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'
import ButtonIcon from '../../reusables/buttons/ButtonIcon'
import trashIcon from '../../../assets/icons/trash-2.svg'

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
            <ButtonIcon>
                <img src={trashIcon} alt='trash icon' />
            </ButtonIcon>
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
        flex-grow: 1;
    }

    img {
        max-width: 96px;
    }

    button {
        align-self: start;
    }
`

CartProductItem.propTypes = {
    cart: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
}

export default CartProductItem
