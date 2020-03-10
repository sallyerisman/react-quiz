import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { auth } from '../modules/firebase'

const Navigation = props => {

    const handleSignOut = (e) => {
		e.preventDefault()

        auth.signOut()
        .then(() => {
			console.log('Signed out!')
			props.history.push('/login')
        })
    }

    return(
        <nav id="navigation" className="navbar navbar-expand-md">
			<p className="navbar-brand">Awesome Quiz app</p>
			<ul className="navbar-nav ml-auto">
				{
					auth.currentUser
					? (
						<li className="nav-item">
							<span className="nav-link" onClick={handleSignOut}>Logout</span>
						</li>
					)
					:(
						''
					)
				}
			</ul>
		</nav>
    )
}

export default withRouter(Navigation)
