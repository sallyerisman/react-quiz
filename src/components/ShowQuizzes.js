import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';

class ShowQuizzes extends React.Component{

	state = {
		quizNames: [],
		name: "",
	}

	componentDidMount() {
        this.getQuizNames();
	}

	getQuizNames = () => {
		db.collection('quizzes').get().then((snapshot) => {
			const quizNames = [];
		  	snapshot.forEach((doc) => {
				const eachName = {
					name: doc.id,
				}

				quizNames.push(eachName)

				this.setState({
					quizNames: quizNames,

				})
			});
		})
	}

	render() {
		const showName = this.state.quizNames.map((id) => {
			return (
				<div className="card col-sm-12 col-md-5">
				<Link to="/play">{id.name}</Link>
				</div>
			)
		})

		return(
			<div>
				<h1>All quizzes</h1>
				{showName}
			</div>
		)
	}
}

export default ShowQuizzes
