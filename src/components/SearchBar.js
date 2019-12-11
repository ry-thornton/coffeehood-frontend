import React from 'react';

class SearchBar extends React.Component{

    state={
        term: ''
    }

   //Change handler function to ensure that form is controlled
    changeHandler = (event) => {
        this.setState({term: event.target.value})
        console.log(this.state.term)
    }

    //Submit handler function that uses search function passed from parent (Display)
    //Uses the term in state as location argument for search function
    submitHandler = (event) => {
        event.preventDefault()
        this.props.search(this.state.term)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input 
                type='text' 
                name='term' 
                value={this.state.term} 
                placeholder='Enter city or address...' 
                onChange={this.changeHandler }/>
                <br/>
                <br/>
                <input type='submit' value='Search!'/>
            </form>
        )
    }
}

export default SearchBar