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
            <PageContent handleAddToCart={handleAddToCart} />
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
}

export default App
