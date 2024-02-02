import styled from 'styled-components'
import Button from '../../reusables/Button'
import useData from '../../../hooks/useData'
import capitalize from '../../../utils/capitalize'
import PropTypes from 'prop-types'

const StyledProductsFilterSection = styled.section`
    padding: 48px 96px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProductsFilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const ProductsFilterSection = ({
    handleSearchInputChange,
    handleCategoryChange,
    handleSort,
}) => {
    const { data, error, loading } = useData('/products/categories')

    if (error)
        return (
            <StyledProductsFilterSection>
                <p>Error!</p>
            </StyledProductsFilterSection>
        )
    if (loading)
        return (
            <StyledProductsFilterSection>
                <p>Loading...</p>
            </StyledProductsFilterSection>
        )

    return (
        <StyledProductsFilterSection>
            <ProductsFilterContainer>
                <form action=''>
                    <input type='text' onChange={handleSearchInputChange} />
                    <Button>Search</Button>
                </form>
                <div>
                    <label htmlFor='category-select'>Category:</label>
                    <select
                        name='category-select'
                        id=''
                        onChange={handleCategoryChange}
                    >
                        <option value='all'>All</option>
                        {data.map((category, index) => {
                            return (
                                <option key={index} value={category}>
                                    {capitalize(category)}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor='sort-select'>Sort:</label>
                    <select name='sort-select' id='' onChange={handleSort}>
                        <option value='title-ascending'>A-Z</option>
                        <option value='title-descending'>Z-A</option>
                        <option value='price-ascending'>
                            Price (low to high)
                        </option>
                        <option value='price-descending'>
                            Price (high to low)
                        </option>
                        <option value='rating-descending'>
                            Rating (high to low)
                        </option>
                    </select>
                </div>
            </ProductsFilterContainer>
        </StyledProductsFilterSection>
    )
}

ProductsFilterContainer.propTypes = {
    handleCategoryChange: PropTypes.func,
    handleSearchInputChange: PropTypes.func,
    handleSort: PropTypes.func,
}

export default ProductsFilterSection
