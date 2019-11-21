import React from 'react'
import SearchBar from './SearchBar.js'


class Display extends React.Component{
    state = {
        loggedIn: false,
        display: null
    }
   render () {
       return (
        <div>
            Find a unique coffee shop for you... 

            <SearchBar />
            </div>
       )
    }
    
    
}

export default Display