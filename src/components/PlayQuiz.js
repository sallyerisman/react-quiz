import React from 'react'
import { db } from "../modules/firebase"

class PlayQuiz extends React.Component{

	state = {
		quizzes: [],
		quiz: [],
	}

	componentDidMount() {
        this.getQuizzes();
	}

	// showSpinner = () => {
	// 	this.setState({
	// 		showSpinner: true,
	// 	})
	// }

	// hideSpinner = () => {
	// 	this.setState({
	// 		showSpinner: false,
	// 	})
	// }

	getQuizzes = () => {

		// this.showSpinner();

		db.collection('quizzes').doc('quiz1').collection('quizItems').get().then((querySnapshot) => {

			const quiz = [];

			querySnapshot.forEach((item) => {
				const options = item.data().options.map((option) => {
					return option;
				})
				const quizItem = {
					id: item.id,
					question: item.data().question,
					answer: item.data().answer,
					options: options
				}
				quiz.push(quizItem)
			});

			this.setState({
				quiz: quiz,
			})

		// 	this.hideSpinner();
		})
	}

	render(){
		const eachQuizItem = this.state.quiz.map((item) => {
			const eachOption = item.options.map((option) => {
				return (
					<label>
						<input
							type="radio"
							name="options"
							value={option}
							// onChange={this.handleChange}
						/> {option}
                	</label>

				)
			})
			return (
				<form>
					<h2>{item.question}</h2>
						{eachOption}
				</form>
			)
		})

		return(
			<div>
				<h1>My quiz</h1>
				{eachQuizItem}
			</div>
		)
	}
}

export default PlayQuiz
