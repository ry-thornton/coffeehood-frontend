import React from 'react'

//Created a simple nav bar with strings
//Wrapped strings with span tags so that functionality could be
//assigned to each word in nav bar

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