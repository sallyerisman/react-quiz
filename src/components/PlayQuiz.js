import React from 'react'
import { db } from "../modules/firebase"

class PlayQuiz extends React.Component{

	state = {
		quiz: [],
		title: "",
		answer: null,
	}

	componentDidMount() {
        this.getQuiz();
	}

	// handleChange = (e) => {

	// }

	getQuiz = () => {
		console.log("this.props", this.props)
		db.collection('quizzes').doc('newTemplateQuiz').get()
		.then((snapshot) => {
			const quiz = [];

			snapshot.data().quizItems.map((item) => {
				const quizItem = {
					question: item.quizItem.question,
					correctAnswer: item.quizItem.correctAnswer,
					options: [item.quizItem.options]
				}
				quiz.push(quizItem)
			});

			this.setState({
				quiz: quiz,
			})
		})
		.catch((err) => {
			console.log('Error getting documents', err);
		});
	}

	render() {
		const eachQuizItem = this.state.quiz.map((item) => {
			const eachOption = item.options.map((option) => {
				return option.map((x, i) =>
					<label key={i}>
						<input
							type="radio"
							name="option"
							value={x}
							// onChange={this.handleChange} />{x}
						/> {x}
					</label>
				);
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
				<h1>Name of quiz</h1>
				{eachQuizItem}
			</div>
		)
	}
}

export default PlayQuiz
