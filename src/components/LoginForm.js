import React from 'react'

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    goToSignUp = () => {
        this.props.goToSignUp()
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert(this.state.username)
    }

    changeHandler = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    render () {
        return (
            <div className="Login">
                <form onSubmit={this.submitHandler}>
                    Login Form
                    <br/>
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.changeHandler}/>
                    <br/>
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                Don't have an account? <span onClick={this.goToSignUp}>Sign up!</span>
            </div>
        )
    }
}


export default LoginForm