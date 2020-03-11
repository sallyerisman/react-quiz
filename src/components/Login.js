import React from 'react'
import { auth } from '../modules/firebase'
import { Link } from 'react-router-dom';

class Login extends React.Component{

    state = {
        email: "",
		password: "",
		errorMsg: "",
    }

    handleChange = (e) => {
        this.setState({
        	[e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            this.props.history.push('/')
        })
        .catch(() => {
			this.setState({
				errorMsg: "Authentication failed. Please try again or play a quiz without logging in."
			})
        })
    }

    render() {
        return (
            <div id="login" className="container">
                <h1>Log in to create quiz</h1>

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
                        <button type="submit" className="btn loginLogout">Log in</button>
                    </div>
                </form>

				{this.state.errorMsg
					? <p className="error">{this.state.errorMsg}</p>
					: ""
				}

				<Link to="/show" className="loginLogout login-btn btn btn-success" >Play a quiz</Link>
            </div>
        )
    }
}

export default Login
