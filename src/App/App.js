import React from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import Sidebar from '../Sidebar'
import '../App.css'

const App = () => {
    return (
        
            <>
                <Header/>
                <Main/>
                <Footer/>
                <Sidebar/>
            </>
        
    )
}

export default App