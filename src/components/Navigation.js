import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../modules/firebase'

const Navigation = props => {

    const handleSignOut = (e) => {
		e.preventDefault()

        auth.signOut()
        .then(() => {
			alert('Signed out!')
        })
    }

    return(
        <nav id="navigation" className="navbar navbar-expand-md">
            <div className="container">
                <Link to="/" className="navbar-brand">Awesome Quiz app</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {
                            props.user
                            ? (
                                <li className="nav-item">
									<span className="nav-link" onClick={handleSignOut}>Logout</span>
								</li>

                            )
                            :(
                                <li className="nav-item">
									<NavLink to="/login" className="nav-link">Login</NavLink>
								</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
