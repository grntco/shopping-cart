import styled from 'styled-components'
import Button from '../../reusables/buttons/Button'
import lockIcon from '../../../assets/icons/lock.svg'
import PropTypes from 'prop-types'
import CartProductItem from './CartProductItem'
import formatToUSD from '../../../utils/formatToUSD'
import groupProductsWithQuantities from '../../../utils/groupProductsWithQuantities'
import getSubtotal from '../../../utils/getSubtotal'

const CartPage = ({ cart }) => {
    const cleanCart = groupProductsWithQuantities(cart)
    const subtotal = getSubtotal(cart)
    const shipping = subtotal >= 50 ? 0 : 10

    if (cart.length === 0)
        return (
            <EmptyCartPage>
                <h2>Your Cart is Empty</h2>
                Add products to your cart to see them appear here!
            </EmptyCartPage>
        )

    return (
        <StyledCartPage>
            <CartPageColumn>
                <h2>Your Cart</h2>
                <CartContainer>
                    {cleanCart.map((product, index) => {
                        return (
                            <CartProductItem
                                key={index}
                                // cart={cart}
                                product={product}
                            />
                        )
                    })}
                </CartContainer>
            </CartPageColumn>
            <CartPageColumn>
                <h2>Summary</h2>
                <p>
                    {subtotal >= 50
                        ? 'Woohoo! You qualify for free shipping!'
                        : `Spend ${formatToUSD(50 - subtotal)} more to qualify for free shipping!`}
                </p>
                <PriceSummaryContainer>
                    <div>
                        <p>Subtotal</p>
                        <p>{formatToUSD(subtotal)}</p>
                    </div>
                    <div>
                        <p>
                            {subtotal >= 50
                                ? 'Free Shipping'
                                : 'Flat Shipping Rate'}
                        </p>
                        <p>{formatToUSD(shipping)}</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>{formatToUSD(subtotal + shipping)}</p>
                    </div>
                </PriceSummaryContainer>
                <Button>
                    <img src={lockIcon} alt='lock icon' color='white' />
                    Checkout Securely
                </Button>
            </CartPageColumn>
        </StyledCartPage>
    )
}

const EmptyCartPage = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

const StyledCartPage = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 48px;
    padding: 48px 96px;
`

const CartPageColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const CartContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;

    li + li {
        border-top: 1px solid grey;
    }
`

const PriceSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
        display: flex;
        justify-content: space-between;
    }
`

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default CartPage
