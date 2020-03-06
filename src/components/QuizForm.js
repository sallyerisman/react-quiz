import React from 'react'
import RenderQuiz from './RenderQuiz';
import { db } from "../modules/firebase"

class QuizForm extends React.Component{

	state = {
		title: '',
		question: "",
		correctAnswer: "",
		inputField: [],
		isSubmitted: false,
		quizItems: [],
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleQuizTitleSubmit = (e) => {
		e.preventDefault()

		const newQuiz = {
			title: this.state.title,
		}

		db.collection("quizzes").add( newQuiz ).then(res => {
			console.log("My title is: ", this.state.title)
		}).catch(err => {
			console.error(err)
		})
	}

	handleClick = (e, index) => {
		this.setState({
			inputField: [...this.state.inputField, this.state.inputField[index]]
		})
	}

	handleChangeInput = (index, e) => {
		const options = [];
		const option = {
			option: e.target.value,
			index: index,
		}
		options.push(option)

		const quizItems = [];
		const quizItem = {
			question: this.state.question,
			correctAnswer: this.state.correctAnswer,
			options: options,
		}
		quizItems.push(quizItem)

		// const quizItems = [];
		// const quizItem = {
		// 	question: this.state.question,
		// 	correctAnswer: this.state.correctAnswer,
		// 	options: options,
		// }
		// quizItems.push({quizItem})

		this.setState({
			quizItems: quizItems,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({
			isSubmitted: true,
		})
	}




	render() {
		return(
			<div className="container">
				<form onSubmit={this.handleQuizTitleSubmit}>
					<div className="input-group mb-3">
						<input
							id="title"
							type="text"
							className="form-control"
							placeholder="Give your quiz a name"
							onChange={this.handleChange}
							value={this.state.title}
						/>

						<div className="input-group-append">
							<button
								className="btn btn-secondary"
								type="submit"
								id="button-addon2"
							>Add title
							</button>
						</div>
					</div>
				</form>

				<form onSubmit={this.handleSubmit}>
					<h1>{this.state.title}</h1>
					<input
						id="question"
						type="text"
						className="form-control"
						placeholder="Write quiz question"
						onChange={this.handleChange}
						value={this.state.question}
					/>
					<div className="input-group mt-3 mb-3">
						<input
							id="correctAnswer"
							type="text"
							className="form-control"
							placeholder="Provide the correct answer"
							onChange={this.handleChange}
							value={this.state.correctAnswer}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-secondary"
								type="button"
								id="button-addon2"
								onClick={this.handleClick}
							>Add more answer options
							</button>
						</div>
					</div>
					{	this.state.inputField
						?
						this.state.inputField.map((item, index) => {
							const i = index;
                        	return (
								<div key={index} className="input-group mt-3 mb-3">
									<input
										id="option"
										type="text"
										className="form-control"
										placeholder="Add more answers"
										onChange={(e) => {this.handleChangeInput(i, e)}}
										value={item}
									/>

									<div className="input-group-append">
										<button
											className="btn btn-secondary"
											type="button"
											id="button-addon2"
											onClick={this.handleClick}
										>Add more answers
										</button>
									</div>
								</div>
							)
						})
						: ""
					}

					<button
						className="btn btn-secondary submit"
						type="submit"
						id="submit-btn"
					>Save quiz
					</button>
				</form>

				{	this.state.isSubmitted
						? <RenderQuiz data={this.state} />
						: ""
				}

			</div>
		)
	}
}

export default QuizForm
