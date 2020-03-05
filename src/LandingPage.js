import React from 'react';
import { Link } from 'react-router-dom';
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
