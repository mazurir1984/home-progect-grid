import React from 'react'
import ProductList from "./Products/ProductList"


import AboutPage from "./About/AboutPage"
import BlogPage from "./Blog/BlogPage"
import CategoryPage from "./Category/CategoryPage"
import {Route} from 'react-router'
import Testimonials from '../../components/Testimonials/Testimonials'




const Main = () => {
    return (
        <main className="main">
            
            <Route path="/"  exact component={ProductList}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/blog" component={BlogPage}/>
            <Route path="/category" component={CategoryPage}/>
            <Route path="/" exact component={Testimonials}/>
        </main>
        
        
        
    )
}

export default Main