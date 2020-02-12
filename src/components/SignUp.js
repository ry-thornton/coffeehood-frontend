import React from 'react';

class SignUp extends React.Component{
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

    goToLogin = () => {
        this.props.goToLogin()
    }
    
    render(){
        return (
        <div className="Login">     
        <form onSubmit={this.submitHandler}>
            Sign Up
            <br/>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.changeHandler} placeholder="First name"/>
            <br/>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeHandler} placeholder="Last name"/>
            <br/>
            <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} placeholder="Username"/>
            <br/>
            <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password"/>
            <br/>
            <input type="submit" name="Submit"/>
        </form>
        Already have an account? <span onClick={this.goToLogin}>Log in!</span>
        </div>
        )
    }
}

export default SignUp