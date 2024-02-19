// import styled from 'styled-components'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
import { useState } from 'react'

const App = () => {
    const [cart, setCart] = useState([])

    return (
        <>
            <Header cart={cart} />
            <PageContent
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
            />
            <Footer />
        </>
    )

    function handleAddToCart(newProduct, quantity) {
        // const numAlreadyInCart = cart.filter(
        //     (product) => (product.title = newProduct.title),
        // ).length

        if (quantity > 0) {
            let productsQueue = []
            for (let i = quantity; i > 0; i--) {
                productsQueue.push(newProduct)
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
}

export default App
