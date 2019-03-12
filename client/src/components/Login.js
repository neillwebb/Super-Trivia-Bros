import React, { Component } from "react";
import Form from '../components/Form'
import '../App.css'
import * as $ from 'axios';

class Login extends Component {
    state = {
        reguser: '',
        regpw: '',
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        })
    }

    handleRegister = (event) => {
        event.preventDefault();
        $.post('/api/user', { username: this.state.reguser, password: this.state.regpw })
            .then((data) => {
                console.log(data)
            }).catch(function (err) {
                alert("Invalid username or password (Username might be taken)")
            })
    }

    handleLogin = (event) => {
        event.preventDefault();
        $.post('/api/session', { username: this.state.username, password: this.state.password })
            .then((data) => {
                // console.log(data)
                sessionStorage.setItem('userId', data.data._id);
                this.props.history.push("/gamewindow")
            }).catch(function (err) {
                alert("Username or password is incorrect")
            })

    }

    render() {
        // console.log(this.state.allScores)
        return (
            <div >
                <Form onChangeHandler={this.handleChange}
                    regHandler={this.handleRegister}
                    loginHandler={this.handleLogin} />
            </div>
        );
    }
}

export default Login;
