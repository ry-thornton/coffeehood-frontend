import React from 'react'
import SearchBar from './SearchBar.js'
import SearchContainer from '../containers/SearchContainer';
import Header from './Header.js'
import LoginForm from './LoginForm.js'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';


class Display extends React.Component{
    state = {
        user: null,
        loggingIn: false,
        searchLat: null,
        searchLon: null,
        shops: null
    }
   
    //Sets the latitude and longitude in state to null
    //Render function uses latitude and longitude to determine if home page
    //or search page should be shown
    home = () => {
        this.setState({searchLat: null, searchLon: null, loggingIn: false})
    }

    //Sets loggingIn state to true
    //Render function uses loggingIn to determine if login form should be shown
    goToLogin = () => {
        this.setState({loggingIn: true})
    }

    //This function is used on login form, 
    //Value of user/username is used to display a welcome message on home page
    //loggingIn is set to false to show home page again
    login = (user) => {
        this.setState({loggingIn: false, user: user})
    }

    //Search function that takes in an argument of location - this argument is a string
    //A fetch is made to LocationIQ api with location interpolated into url
    //Api returns a JSON file with latitude and longitude of location searched
    //These values are used to set latitude and longitude in state - this is passed down to search container
    search = (location) => {
        fetch(`https://us1.locationiq.com/v1/search.php?key=97e3586cc4161f&q=${location}&format=json`)
        .then(response => response.json())
        .then(data => this.setState({searchLat: parseFloat(data[0]['lat']), searchLon: parseFloat(data[0]['lon'])})) 
    }


   render () {
       
       return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand>CoffeeHood</Navbar.Brand>
                    <Nav.Link onClick={this.home}>Home</Nav.Link>
                    <Nav.Link>Featured</Nav.Link>
                    <Nav.Link onClick={this.goToLogin}>Login</Nav.Link>
            </Navbar>

            {this.state.loggingIn ? 

            <div className="Landing-page">
                <LoginForm login={this.login}/>
            </div> : 
            <div>
            {this.state.searchLat && this.state.searchLon ?
                <div>
                    <div className="Container">
                    <SearchBar search={this.search} />
                    <SearchContainer key={this.state.searchLat} lat={this.state.searchLat} lon={this.state.searchLon} />
                    </div>
                </div>
            :
                <div>
                    <div className="Landing-page">
                    {this.state.user ? <div><br/>Welcome {this.state.user.username}</div> : null}
                        <div className={"Greeting"}>Find a unique coffee shop for you...</div >
                        <br/>
                        <SearchBar search={this.search} />
                    </div>
                </div>} 
            </div>  }
        </div>
       )
    }
    
    
}

export default Display