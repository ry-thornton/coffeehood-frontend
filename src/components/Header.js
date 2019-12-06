import React from 'react'


function Header(props) {
    return( 
        <div className="App-header" >
            <span className="Landing-page-logo">
                UNIQE
            </span>
            <br/>
            <span><span onClick={props.home}>Home</span> | Featured | <span onClick={props.login}>Login</span></span>
        </div>
    )
}

export default Header