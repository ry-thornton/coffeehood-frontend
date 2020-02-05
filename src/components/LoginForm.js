import React from 'react';

class LoginForm extends React.Component{
    state={
        firstname: "",
        lastname: "",
        username: "",
        password: ""

    }



    //Submit handler that sends fetch request to backend of application creating a user
    //Information about user from state is passed into fetch through body
    //Then login function is called to "go back" to home page and greet user with new username
    submitHandler = (event) => {
        debugger
        event.preventDefault()
       return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            })
        })
        .then(response => response.json())
        .then(data => this.props.login(data) )
    }

    //Change handler function to ensure form is contolled
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
        return (
        <div className="Login">     
        <form onSubmit={this.submitHandler}>
            First Name
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.changeHandler}/>
            Last Name
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeHandler}/>
            Username
            <input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
            <input type="submit" name="Submit"/>
        </form>
        </div>
        )
    }
}

export default LoginForm