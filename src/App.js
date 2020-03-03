import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage'
import MakeQuiz from './components/MakeQuiz';

class App extends React.Component{
    render(){
        return (
			<BrowserRouter>
				<div className="container">
					<h1>Quiz</h1>
					<Route exact path="/" component={LandingPage} />
					<Route path="/create" component={MakeQuiz} />
				</div>
			</BrowserRouter>
        );

    }
}

export default App;
