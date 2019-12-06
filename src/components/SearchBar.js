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