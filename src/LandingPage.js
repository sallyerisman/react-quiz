import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Navigation from './components/Navigation'
import { auth } from './modules/firebase'

class LandingPage extends React.Component{

	state = {
		user: null,
	}

	componentDidMount() {
		auth.onAuthStateChanged(authUser => {
			if(authUser){
				this.setState({
					user: {
						email: authUser.email
					}
				})
			}else {
				this.setState({
					user: null,
				})
			}
		})
	}

    render(){
        return (
			<div>

				<Navigation />

				<div className="login-paragraph">
					{this.state.user
					?
					(<p>You are logged in as {this.state.user.email}!</p>)
					:
					(<p>No one is logged in!</p>)
					}
				</div>

				<h1>Quiz</h1>

=======
// import { auth } from "./modules/firebase"

class LandingPage extends React.Component{

	// state = {
	// 	email: "",
	// 	password: "",
	// }

    render(){
        return (
			<div className="container">
				<h1>Quiz</h1>
>>>>>>> c464102aa879575350e9b7f656aa87747d1c05de
				<main className="row">
					<div className="card col-sm-12 col-md-5">
						<Link to="/create">Make your own quiz</Link>
					</div>
					<div className="card col-sm-12 col-md-5">
						<Link to="/show">Try a quiz</Link>
					</div>
				</main>
			</div>
        );

    }
}

export default LandingPage;
