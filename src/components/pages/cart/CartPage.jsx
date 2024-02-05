import styled from 'styled-components'
import Button from '../../reusables/Button'
import lockIcon from '../../../assets/icons/lock.svg'
import PropTypes from 'prop-types'
import CartProductItem from './CartProductItem'

const CartPage = ({ cart }) => {
    const cartSet = Array.from(new Set(cart))

    return (
        <StyledCartPage>
            <CartPageColumn>
                <h2>Your Cart</h2>
                <CartContainer>
                    {cartSet.map((product, index) => {
                        return (
                            <CartProductItem
                                key={index}
                                cart={cart}
                                product={product}
                            />
                        )
                    })}
                </CartContainer>
            </CartPageColumn>
            <CartPageColumn>
                <h2>Summary</h2>
                <PriceSummaryContainer>
                    <div>
                        <p>Subtotal</p>
                        <p>$100.00</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>-$100.00</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>Free Standard</p>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <p>$100.00</p>
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

const StyledCartPage = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
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
