import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GetQuiz from './components/GetQuiz'

class LandingPage extends React.Component{
    render(){
        return (
				<div className="container">
					<h1>Quiz</h1>
					<main className="row">
						<div className="col-sm-12 col-md-6">
							<Link to="/create">Make your own quiz</Link>
						</div>
						<div className="col-sm-12 col-md-6">
							<GetQuiz />
						</div>
					</main>
				</div>
        );

    }
}

export default LandingPage;
