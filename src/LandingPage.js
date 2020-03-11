import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './modules/firebase'

class LandingPage extends React.Component{

	componentDidMount() {
		if (!auth.currentUser) {
			this.props.history.push('/login')
		}
	}

    render() {
        return (
			<div className="container">
				<h1 className="headLand">Quiz</h1>
				<main className="row">
					<div className="col-sm-12 col-md-5 navigationBtn">
					<h2 className="questionLand">Create Quiz</h2>
						<Link to="/create"><img src={require("./images/circle-plus-two.png")}/> </Link>
					</div>
					<div className="col-sm-12 col-md-5 navigationBtn">
					<h2 className="questionLand">Play Quiz</h2>
						<Link to="/show"><img src={require("./images/play-button-two.png")}/></Link>
					</div>
				</main>
			</div>
        );
    }
}

export default LandingPage;
