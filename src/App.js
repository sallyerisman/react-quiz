import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage'
import QuizForm from './components/QuizForm'
import PlayQuiz from './components/PlayQuiz'

class App extends React.Component{
    render(){
        return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={LandingPage} />
					<Route path="/create" component={QuizForm} />
					<Route path="/play" component={PlayQuiz} />
				</div>
			</BrowserRouter>
        );

    }
}

export default App;
