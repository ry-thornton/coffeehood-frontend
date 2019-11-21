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
        console.log(this.state.term)
    }
    

    render(){
        return(

           
           <form onSubmit={this.submitHandler }>
                <input 
                type='text' 
                name='term' 
                value={this.state.term} 
                placeholder='Enter zip code...' 
                onChange={this.changeHandler }/>
                <input type='submit' value='Search!'/>

            </form>
        )
    }
}

export default SearchBar

// When I click submit a fetch should be send with the value of the form input
//This value should be used as a condition to find all coffee shops that meet the condition