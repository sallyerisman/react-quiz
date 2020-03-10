import React from 'react'
import { auth } from '../modules/firebase'
import { Link } from 'react-router-dom';

class Login extends React.Component{

    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { email, password } = this.state

        auth.signInWithEmailAndPassword(email, password)
        .then(credentials => {
            console.log('Authentication successful!', credentials);

            this.props.history.push('/')
        })
        .catch(err => {
			alert('Authentication failed! Try again.')
        })

    }

    render(){
        return(
            <div id="login" className="container">
                <h1>Login to create quiz</h1>

                <form id="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            onChange={this.handleChange}
                            />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            onChange={this.handleChange}
                            />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success">Log in</button>
                    </div>

                </form>

				<Link to="/show" className="login-btn btn btn-success" >Try a quiz</Link>
            </div>
        )
    }
}

export default Login
