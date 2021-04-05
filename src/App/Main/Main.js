import React from 'react'
import ProductList from "./Products/ProductList"


import AboutPage from "./About/AboutPage"
import {Route} from 'react-router'




const Main = () => {
    return (
        <main className="main">
            <ProductList/>
            <Route path="/about" exact component={AboutPage}/>
        </main>
        
        
        
    )
}

export default Main