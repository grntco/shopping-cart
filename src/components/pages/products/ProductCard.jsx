import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import starIcon from '../../../assets/icons/star.svg'
import Icon from '../../reusables/Icon'
import Button from '../../reusables/Button'

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
`

const CardImage = styled.img`
    width: 100%;
`

const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardInfoRating = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const ProductCard = ({ product, handleAddToCart }) => {
    return (
        <StyledCard>
            <CardImageLink>
                <CardImage
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
                        <Button $primary>-</Button>
                        <input type='number' />
                        <Button $primary>+</Button>
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
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductCard
