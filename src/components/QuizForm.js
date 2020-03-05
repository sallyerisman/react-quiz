import React from 'react'
import RenderQuizQuestion from './RenderQuizQuestion';

class QuizForm extends React.Component{

	state = {

		quizName: '',
		quizNameBoolean: false,
		question: '',
		rightAnswer: '',
		input: [],
		isSubmitted: false,

	}

	handleChangeInput = (e, index) => {
		let inputs = this.state.input
		inputs[index] = e.target.value

		this.setState({
			input: inputs
		})

	}

	handleChange = (e) => {

		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleClick = (e, index) => {
		this.setState({
			input: [...this.state.input, this.state.input[index]]
		})
	}

	handleQuizNameSubmit = (e) => {
		e.preventDefault()
		this.setState({
			quizNameBoolean: true,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({
			isSubmitted: true,
		})
	}




	render(){
		return(
			<div className="container">
				{
					!this.state.quizNameBoolean ?
					<form onSubmit={this.handleQuizNameSubmit}>
						<div className="input-group mb-3">
							<input
								id="quizName"
								type="text"
								className="form-control"
								placeholder="Give your quiz a name"
								onChange={this.handleChange}
								value={this.state.quizName}
							/>

							<div className="input-group-append">
								<button
									className="btn btn-secondary"
									type="submit"
									id="button-addon2"
								>Add quiz
								</button>
							</div>

						</div>
					</form>
					:
					<form onSubmit={this.handleSubmit}>
						<h1>{this.state.quizName}</h1>
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
								id="rightAnswer"
								type="text"
								className="form-control"
								placeholder="Provide the right answer"
								onChange={this.handleChange}
								value={this.state.rightAnswer}
							/>

							<div className="input-group-append">
								<button
									className="btn btn-secondary"
									type="button"
									id="button-addon2"
									onClick={(e, index) => {this.handleClick(e, index)}}
								>Add more answers
								</button>
							</div>

						</div>

						{
							this.state.input.map((item, index) => {
								return (
									<div key={index} className="input-group mt-3 mb-3">
										<input
											id="answer"
											type="text"
											className="form-control"
											placeholder="Add more answers"
											onChange={(e, index) => {this.handleChangeInput(e, index)}}
											value={this.state.input[item]}
										/>

										<div className="input-group-append">
											<button
												className="btn btn-secondary"
												type="button"
												id="button-addon2"
												onClick={(e, index) => {this.handleClick(e, index)}}
											>Add more answers
											</button>
										</div>
									</div>
								)

							})
						}

						{/* {
							this.state.input.map(input => {
								return input
							})
						} */}

						<button
							className="btn btn-secondary submit"
							type="submit"
							id="button-addon2"
						>Submit
						</button>
					</form>
				}

				{
					this.state.isSubmitted
					? <RenderQuizQuestion
						rightAnswer={this.state.rightAnswer}
						question={this.state.question}
						input={this.state.input}
					/>
					: ''
				}

			</div>

		)

	// handleClick = () => {

	// 	const id = Math.random()*100

	// 	const array = this.state.input
	// 	array.push(
	// 		<div className="input-group mb-3" key={id}>
	// 				<input
	// 					id="answer"
	// 					type="text"
	// 					className="form-control"
	// 					placeholder="Provide the right answer"
	// 					onChange={this.handleChange}
	// 					value={this.state.answer}
	// 				/>

	// 				<div className="input-group-append">
	// 					<button
	// 						className="btn btn-secondary"
	// 						type="button"
	// 						id="button-addon2"
	// 						onClick={this.handleClick}
	// 					>Add more answers
	// 					</button>
	// 				</div>
	// 			</div>
	// 	)
	// 	this.setState({
	// 		input: array,
	// 	})
	// }
	}
}

export default QuizForm
