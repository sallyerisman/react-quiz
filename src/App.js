import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'
import QuizForm from './components/QuizForm'
import ShowQuizzes from "./components/ShowQuizzes"
import PlayQuiz from './components/PlayQuiz'
import Login from './components/Login'

class App extends React.Component{

    render(){
        return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/create" component={QuizForm} />
					<Route path="/show" component={ShowQuizzes} />
					<Route path='/login' component={Login} />
					<Route path="/play/:id" component={PlayQuiz} />
				</Switch>
			</BrowserRouter>
        );

    }
}

export default App;
