import React from 'react'

class QuizForm extends React.Component{

	state = {

		quizName: '',
		quizNameBoolean: false,
		questions: [],
		question: '',
		answers: [],
		answer: '',
		ifSubmitted: false,
		input: [],

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

	handleClick = (e) => {
		this.setState({
			input: [...this.state.input, '']
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
		const questions = [...this.state.questions, this.state.question]

		this.setState({
			question: '',
			questions: questions,
			ifSubmitted: true,
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
									type="button"
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
								id="answer"
								type="text"
								className="form-control"
								placeholder="Provide the right answer"
								onChange={this.handleChange}
								value={this.state.answer}
							/>

							<div className="input-group-append">
								<button
									className="btn btn-secondary"
									type="button"
									id="button-addon2"
									onClick={(e) => {this.handleClick(e)}}
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
												onClick={(e) => {this.handleClick(e)}}
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
			</div>

		)
	}
}

export default QuizForm
