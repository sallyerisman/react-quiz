import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage'
import QuizForm from './components/QuizForm'
import ShowQuizzes from "./components/ShowQuizzes"
import PlayQuiz from './components/PlayQuiz'

class App extends React.Component{
    render(){
        return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={LandingPage} />
					<Route path="/create" component={QuizForm} />
					<Route path="/show" component={ShowQuizzes} />
					<Route path="/play/:id" component={PlayQuiz} />
				</div>
			</BrowserRouter>
        );

    }
}

export default App;
