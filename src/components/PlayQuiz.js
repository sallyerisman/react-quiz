import React from 'react'
import { db } from "../modules/firebase"

class PlayQuiz extends React.Component{

	state = {
		// quizzes: [],
		quiz: [],
		name: "",
		quizItem: {
			question: "",
			correctAnswer: "",
			options: [],
		},
		answer: null,
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

	// handleChange = (e) => {

	// }

	getQuizzes = (name) => {
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
					correctAnswer: item.data().answer,
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
							id="option"
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
				<h1>All quizzes</h1>
				<h2>This is play mode!!!</h2>

				{eachQuizItem}
			</div>
		)
	}
}

export default PlayQuiz
