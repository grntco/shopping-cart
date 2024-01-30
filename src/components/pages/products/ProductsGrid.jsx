import styled from 'styled-components'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

const StyledProductsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    gap: 24px;
`

const ProductsGrid = ({ products }) => {
    return (
        <StyledProductsGrid>
            {products.map((product, index) => {
                return <ProductCard key={index} product={product} />
            })}
        </StyledProductsGrid>
    )
}

ProductsGrid.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ProductsGrid
