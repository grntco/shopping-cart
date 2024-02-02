import styled from 'styled-components'
import useData from '../../../hooks/useData'
import capitalize from '../../../utils/capitalize'
import PropTypes from 'prop-types'

const StyledProductsFilterSection = styled.section`
    padding: 48px 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-color: #fafafa;
    border-bottom: 1px solid black;
`

const ProductsFiltersContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    div {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    label {
        font-size: 0.8rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    input,
    select {
        border: 1px solid grey;
        padding: 4px;
    }
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
            {/* maybe do something with changing the title based on category change */}
            <h1>The EverCart Products</h1>
            <ProductsFiltersContainer>
                <div>
                    <label htmlFor='search-input'>Search:</label>
                    <input
                        type='text'
                        autoComplete='off'
                        id='search-input'
                        onChange={handleSearchInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='category-select'>Category:</label>
                    <select
                        id='category-select'
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
                    <select id='sort-select' onChange={handleSort}>
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
            </ProductsFiltersContainer>
        </StyledProductsFilterSection>
    )
}

ProductsFilterSection.propTypes = {
    handleCategoryChange: PropTypes.func,
    handleSearchInputChange: PropTypes.func,
    handleSort: PropTypes.func,
}

export default ProductsFilterSection
