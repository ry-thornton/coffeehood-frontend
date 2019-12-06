import React from 'react'
import SearchBar from './SearchBar.js'
import SearchContainer from '../containers/SearchContainer';
import Header from './Header.js'
import LoginForm from './LoginForm.js'

class Display extends React.Component{
    state = {
        user: null,
        loggingIn: false,
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

    goToLogin = () => {
        this.setState({loggingIn: true})
    }

    login = (user) => {
        this.setState({loggingIn: false, user: user})
    }


    search = (location) => {
        fetch(`https://us1.locationiq.com/v1/search.php?key=97e3586cc4161f&q=${location}&format=json`)
        .then(response => response.json())
        .then(data => this.setState({searchLat: parseFloat(data[0]['lat']), searchLon: parseFloat(data[0]['lon'])})) 
    }

   render () {
       
       return (
        <div>
        {this.state.loggingIn ? <div className="Landing-page"><Header home={this.home}/><LoginForm login={this.login}/></div> : <div>
        {this.state.searchLat && this.state.searchLon ?
        <div>
            <Header home={this.home} login={this.goToLogin}/>
            <div className="Container">
                <SearchBar searchShops={this.searchShops} />
                <SearchContainer key={this.state.searchLat} lat={this.state.searchLat} lon={this.state.searchLon} />
            </div>
        </div>
        :
        <div>
            <Header home={this.home} login={this.goToLogin}/>
            <div className="Landing-page">
                {this.state.user ? <div><br/>Welcome {this.state.user.username}</div> : null}
                <div className={"Greeting"}>Find a unique coffee shop for you...</div >
                <br/>
                <SearchBar searchShops={this.searchShops} />
            </div>
             <div className="Featured-page">
            

             </div>
        </div> } </div>  }
             </div>
       )
    }
    
    
}

export default Display