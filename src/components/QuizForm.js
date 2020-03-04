import React from 'react'

class QuizForm extends React.Component{

	state = {
		quizzes: [
			{
				name: '',
				quizItem: {
					question: '',
					answers: [],
				},
			},
		]


	}

	handleChange = (e) => {
		console.log(e.target.value)
		// e.target.type === 'checkbox' ?
		// this.setState({
        //     [e.target.id]: e.target.checked
        // })
        // :
        // this.setState({
        //     [e.target.id]: e.target.value
        // })
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleClick = (e) => {

	}

	render(){
		return(
			<div className="container">
				<div>
					<p>{this.state.question}</p>
					<label>
						<input type="radio" />
						{this.state.answers}
					</label>

				</div>

				<form >
					<input
						id="question"
						type="text"
						className="form-control"
						placeholder="Quiz Name"
						onChange={this.handleChange}
					/>
					<div className="input-group mb-3">
						<input
							id="answers"
							type="text"
							className="form-control"
							placeholder="Add answer"
							onChange={this.handleChange}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-secondary"
								type="button"
								id="button-addon2"
								onClick={this.handleClick}
							>Add Answer
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default QuizForm
