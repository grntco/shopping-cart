// import styled from 'styled-components'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
import { useState } from 'react'

const App = () => {
    const [cart, setCart] = useState([])
    console.log(cart)

    return (
        <>
            <Header cart={cart} />
            <PageContent
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
                handleQuantitySelectChange={handleQuantitySelectChange}
            />
            <Footer />
        </>
    )

    function handleAddToCart(product, quantity) {
        if (quantity > 0) {
            let productsQueue = []
            for (let i = quantity; i > 0; i--) {
                productsQueue.push(product)
            }
            setCart([...cart, ...productsQueue])
        }
    }

    function handleDeleteFromCart(currentProduct) {
        const cartWithoutProduct = cart.filter(
            (product) => product.title !== currentProduct.title,
        )
        setCart(cartWithoutProduct)
    }

    function handleQuantitySelectChange(e, currentProduct) {
        const newQuantity = e.target.value
        handleAddToCart(currentProduct, newQuantity)
    }
}

export default App
