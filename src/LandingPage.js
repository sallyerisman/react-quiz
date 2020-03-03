import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component{
    render(){
        return (
				<div className="container">
					<h1>Quiz</h1>
					<main className="row">
						<div className="card col-sm-12 col-md-5">
							<Link to="/create"><p>Make your own quiz</p></Link>
						</div>
						<div className="card col-sm-12 col-md-5">
							<Link to="/play">Try a quiz</Link>
						</div>
					</main>
				</div>
        );

    }
}

export default LandingPage;
