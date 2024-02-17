// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'
import ButtonIcon from '../../reusables/buttons/ButtonIcon'
import trashIcon from '../../../assets/icons/trash-2.svg'

const CartProductItem = ({
    product,
    handleDeleteFromCart,
    handleQuantitySelectChange,
}) => {
    const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1)

    return (
        <StyledCartProductItem>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
            </Link>
            <ProductItemInfo>
                <div>
                    <Link to={`/products/${product.id}`}>
                        <h4>{product.title}</h4>
                    </Link>
                    <p>{formatToUSD(product.price)}</p>
                </div>
                <ProductItemButtonsContainer>
                    <QuantitySelectContainer>
                        <label htmlFor='quantity-select'>Qty:</label>
                        <select
                            id='quantity-select'
                            onChange={(e) => {
                                handleQuantitySelectChange(e, product)
                            }}
                        >
                            {quantityOptions.map((option, index) => {
                                return (
                                    <option
                                        key={index}
                                        selected={option === product.quantity}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                )
                            })}
                        </select>
                    </QuantitySelectContainer>
                    <ButtonIcon>
                        <img
                            src={trashIcon}
                            alt='trash icon'
                            onClick={() => {
                                handleDeleteFromCart(product)
                            }}
                        />
                    </ButtonIcon>
                </ProductItemButtonsContainer>
            </ProductItemInfo>
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

    img {
        max-width: 96px;
    }

    button {
        align-self: start;
    }
`

const ProductItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
`

const ProductItemButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const QuantitySelectContainer = styled.div`
    display: flex;
    gap: 4px;
`

CartProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    handleDeleteFromCart: PropTypes.func.isRequired,
    handleQuantitySelectChange: PropTypes.func.isRequired,
}

export default CartProductItem
