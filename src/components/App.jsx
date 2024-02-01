// import styled from 'styled-components'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
import { useState } from 'react'

const App = () => {
    const [cartItems, setCartItems] = useState([])

    return (
        <>
            <Header />
            <PageContent />
            <Footer />
        </>
    )


}

export default App
