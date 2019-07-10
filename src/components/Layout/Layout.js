import React, { Component, Fragment } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export class Layout extends Component {
    render(){
        return(
            <Fragment>
                <Navigation/>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Layout