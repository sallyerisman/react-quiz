import React from 'react'
import RenderPreview from './RenderPreview';
import { db } from "../modules/firebase"
import { field } from "../modules/firebase"
import { Link } from 'react-router-dom';

class QuizForm extends React.Component{

	state = {
		title: '',
		docId: null,
		question: "",
		correctAnswer: "",
		inputField: [],
		isSubmitted: false,
		quizItems: [],
		options: [],
		isTitleSubmitted: false,
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleQuizTitleSubmit = (e) => {
		e.preventDefault()

		this.setState({
			isTitleSubmitted: true,
		})

		const newQuiz = {
			title: this.state.title,
			quizItems: [],
		}

		db.collection("quizzes").add( newQuiz ).then(docRef => {
			this.setState({
				docId: docRef.id,
			});
		}).catch(err => {
			console.error(err)
		})
	}

	handleClick = (e, index) => {
		this.setState({
			inputField: [...this.state.inputField, this.state.inputField[index]],
		})
	}

	handleChangeInput = (index, e) => {
		const options = this.state.options;
		options[index] = e.target.value;

		this.setState({
			options: options,
		})
	}

	getQuizItems = () => {
		db.collection('quizzes').doc(this.state.docId).get()
        .then((snapshot) => {
			this.setState({
				quizItems: snapshot.data().quizItems,
			})
		}).catch(err => {
			console.error(err)
		})
	}

	setQuizItems = () => {
		db.collection('quizzes').doc(this.state.docId).get()
        .then((snapshot) => {

			const quizItems = snapshot.data().quizItems;
			const quizItem = {
				question: this.state.question,
				correctAnswer: this.state.correctAnswer,
				options: [...this.state.options, this.state.correctAnswer],
				id: this.state.quizItems.length + 1,
			}

			quizItems.push(quizItem);

			db.collection('quizzes').doc(this.state.docId).set({
				quizItems: quizItems,
			}, { merge: true }).then(() => {
				this.setState({
					quizItems: quizItems,
					isSubmitted: true,
					inputField: [],
					question: "",
					correctAnswer: "",
					options: [],
				})
			}).catch(err => {
				console.error(err)
			})

		}).catch(err => {
			console.error(err)
		})
	}

	handleDeleteQuestion = (i) => {
		const quizItems = this.state.quizItems;
		quizItems.splice(i, 1);

		db.collection("quizzes").doc(this.state.docId).update({
			quizItems
		}).then(() => {
			this.getQuizItems();
		});
    }

	handleSubmit = (e) => {
		e.preventDefault()

		this.setQuizItems();
	}

	render() {
		return(
			<div>
				<Link to="/">Back to main page</Link>
				<div className="container">
					{ !this.state.isTitleSubmitted
						? (
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
						)
						: (
							<form onSubmit={this.handleSubmit}>
							<h1>{this.state.title}</h1>
							<input
								id="question"
								type="text"
								className="form-control"
								required
								placeholder="Write quiz question"
								onChange={this.handleChange}
								value={this.state.question}
							/>
							<div className="input-group mt-3 mb-3">
								<input
									id="correctAnswer"
									type="text"
									className="form-control"
									required
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
							>Add another question
							</button>
						</form>
						)
					}
					{	this.state.isSubmitted
							? <RenderPreview quizItems={this.state.quizItems} title={this.state.title} onDelete={this.handleDeleteQuestion} />
							: ""
					}
				</div>
			</div>
		)
	}
}

export default QuizForm
