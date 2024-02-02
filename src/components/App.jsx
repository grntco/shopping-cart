// import styled from 'styled-components'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
import { useState } from 'react'

const App = () => {
    const [cart, setCart] = useState([])

    return (
        <>
            <Header cart={cart}/>
            <PageContent handleAddToCart={handleAddToCart}/>
            <Footer />
        </>
    )

    // eventually this will be ...newProducts spread into the array
    function handleAddToCart(selectedProducts) {
        setCart([...cart, ...selectedProducts])
    }
}

export default App
