import useData from '../../../hooks/useData'
import ProductsFilterSection from './ProductsFilterSection'
import ProductsGrid from './ProductsGrid'
import LoadingPage from '../loading/LoadingPage'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import capitalize from '../../../utils/capitalize'

const ProductsPage = ({ handleAddToCart }) => {
    const { data, error, loading } = useData('/products')
    const [products, setProducts] = useState([])
    const [pageTitle, setPageTitle] = useState('All Products')
    // const [selectedCategory, setSelectedCategory] = useState('all')
    // const [selectedSort, setSelectedSort] = useState('id-ascending')

    useEffect(() => {
        if (data) setProducts(data)
    }, [data])

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    return (
        <>
            <ProductsFilterSection
                pageTitle={pageTitle}
                handleSearchInputChange={handleSearchInputChange}
                handleCategoryChange={handleCategoryChange}
                handleSort={handleSort}
            />
            <ProductsGrid
                products={products}
                handleAddToCart={handleAddToCart}
            />
        </>
    )

    function handleSearchInputChange(e) {
        document.getElementById('category-select').selectedIndex = 0
        document.getElementById('sort-select').selectedIndex = 0

        setPageTitle('All Products')
        setProducts(
            data.filter((product) =>
                product.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()),
            ),
        )

        handleSort({ target: { value: 'id-ascending' } })
    }

    function handleCategoryChange(e) {
        const newCategory = e.target.value
        document.getElementById('sort-select').selectedIndex = 0
        document.getElementById('search-input').value = ''


        if (newCategory === 'all') {
            setPageTitle('All Products')
            setProducts(data)
        } else {
            setPageTitle(capitalize(newCategory))
            setProducts(
                data.filter((product) => product.category === newCategory),
            )
        }

        handleSort({ target: { value: 'id-ascending' } })
    }

    function handleSort(e) {
        const sortMethod = e.target.value
        let compareFn

        switch (sortMethod) {
            case 'title-ascending':
                compareFn = titleAscending
                break
            case 'title-descending':
                compareFn = titleDescending
                break
            case 'price-ascending':
                compareFn = priceAscending
                break
            case 'price-descending':
                compareFn = priceDescending
                break
            case 'rating-descending':
                compareFn = ratingDescending
                break
            case 'id-ascending':
                compareFn = idAscending
                break
            default:
                compareFn = idAscending
        }

        function titleAscending(prev, next) {
            const prevTitle = prev.title.toUpperCase()
            const nextTitle = next.title.toUpperCase()

            if (prevTitle < nextTitle) {
                return -1
            } else if (prevTitle > nextTitle) {
                return 1
            } else {
                return 0
            }
        }
        function titleDescending(prev, next) {
            const prevTitle = prev.title.toUpperCase()
            const nextTitle = next.title.toUpperCase()

            if (prevTitle > nextTitle) {
                return -1
            } else if (prevTitle < nextTitle) {
                return 1
            } else {
                return 0
            }
        }
        function priceAscending(prev, next) {
            return prev.price - next.price
        }
        function priceDescending(prev, next) {
            return next.price - prev.price
        }
        function ratingDescending(prev, next) {
            return next.rating.rate - prev.rating.rate
        }
        function idAscending(prev, next) {
            return prev.id - next.id
        }

        setProducts((prevProducts) => [...prevProducts].sort(compareFn))
    }
}

ProductsPage.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductsPage
