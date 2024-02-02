import styled from 'styled-components'
import Button from '../../reusables/Button'
import useCategories from '../../../hooks/useCategories'
import capitalize from '../../../utils/capitalize'

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

const ProductsFilterSection = () => {
    const { categories, error, loading } = useCategories()

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

    console.log(categories)
    return (
        <StyledProductsFilterSection>
            <ProductsFilterContainer>
                <form action=''>
                    <input type='text' />
                    <Button>Search</Button>
                </form>
                <select name='' id=''>
                    <option value=''>All</option>
                    {categories.map((category, index) => {
                        return (
                            <option key={index} value={category}>
                                {capitalize(category)}
                            </option>
                        )
                    })}
                </select>
                <select name='' id=''>
                    <option value=''>A-Z</option>
                    <option value=''>Z-A</option>
                    <option value=''>Price (low to high)</option>
                    <option value=''>Price (high to low)</option>
                </select>
            </ProductsFilterContainer>
        </StyledProductsFilterSection>
    )
}

export default ProductsFilterSection
