import React from 'react';
class SearchBar extends React.Component{
    state={
        term: ''
    }
    changeHandler = (event) => {
        this.setState({term: event.target.value})
        console.log(this.state.term)
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.searchShops(this.state.term)
    }
    



    // search = () => {
    //     fetch('https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&cuisines=55&apikey=d867fa503de492da9df396f5f2fbb9c6')
    //     .then(response => response.json())
    //     .then(shops => shops["restaurants"].map(shop => console.log(shop)))
    // }


    render(){
        return(

           
           <form onSubmit={this.submitHandler }>
                <input 
                type='text' 
                name='term' 
                value={this.state.term} 
                placeholder='Enter city or address...' 
                onChange={this.changeHandler }/>
                <input type='submit' value='Search!'/>

            </form>
        )
    }
}

export default SearchBar

// When I click submit a fetch should be send with the value of the form input
//This value should be used as a condition to find all coffee shops that meet the condition