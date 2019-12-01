import React from 'react'
import SearchBar from './SearchBar.js'
import SearchContainer from '../containers/SearchContainer'


class Display extends React.Component{
    state = {
        loggedIn: false,
        searchLat: null,
        searchLon: null,
        shops: null
    }

    searchShops = (location) => {
        this.search(location)
    }
   
    home = () => {
        this.setState({searchLat: null, searchLon: null})
    }

    search = (location) => {
        fetch(`https://us1.locationiq.com/v1/search.php?key=97e3586cc4161f&q=${location}&format=json`)
        .then(response => response.json())
        .then(data => this.setState({searchLat: parseFloat(data[0]['lat']), searchLon: parseFloat(data[0]['lon'])})) 
    }

   render () {
       
       return (
        this.state.searchLat && this.state.searchLon ?
        <div>
        <span onClick={this.home}>Home</span>
        <br/>
        <SearchBar searchShops={this.searchShops} />
        <SearchContainer key={this.state.searchLat} lat={this.state.searchLat} lon={this.state.searchLon} />
        </div>
        :
        <div>
            Find a unique coffee shop for you... 

            <SearchBar searchShops={this.searchShops} />
            </div>
       )
    }
    
    
}

export default Display