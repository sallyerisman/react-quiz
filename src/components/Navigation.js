import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../modules/firebase'

const Navigation = props => {

    const handleSignOut = (e) => {
		e.preventDefault();

        auth.signOut()
        .then(() => {
			props.history.push('/login')
        })
    }

    return(
        <nav id="navigation" className="navbar navbar-expand-md">
			<Link className="logo" to="/">
				<img src={require("../images/quiz.png")} alt="logo" />
			</Link>
			{
				auth.currentUser
				? <span className="loginLogout nav-link" onClick={handleSignOut}>Log out</span>
				: ''
			}
		</nav>
    )
}

export default withRouter(Navigation)
