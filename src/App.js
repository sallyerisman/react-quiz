import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'
import QuizForm from './components/QuizForm'
import ShowQuizzes from "./components/ShowQuizzes"
import PlayQuiz from './components/PlayQuiz'
import Login from './components/Login'
import Navigation from './components/Navigation'
import { auth } from './modules/firebase'

class App extends React.Component{

	state = {
		user: null,
		loading: true,
	}

	componentDidMount() {
		this.onAuthStateChangedListener = auth.onAuthStateChanged(authUser => {
			if(authUser){
				this.setState({
					user: {
						email: authUser.email
					},
					loading: false,
				})
			}else {
				this.setState({
					user: null,
					loading: false,
				})
			}
		})
	}

	componentWillUnmount() {
		this.onAuthStateChangedListener();
	}

    render(){
        return (
			<BrowserRouter>
				{
					this.state.loading
					? (
						<div>...Loading</div>
					)
					:
					(
						<div id="app">
							<Navigation user={this.state.user} />

							<Switch>
								<Route exact path="/" component={LandingPage} />
								<Route path="/create" component={QuizForm} />
								<Route path="/show" component={ShowQuizzes} />
								<Route path='/login' component={Login} />
								<Route path="/play/:id" component={PlayQuiz} />
							</Switch>
						</div>
					)
				}
			</BrowserRouter>
        );

    }
}

export default App;
