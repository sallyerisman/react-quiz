import React from 'react'
import RenderPreview from './RenderPreview';
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';
import TitleForm from "./TitleForm"
import QuestionForm from "./QuestionForm"

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
		showSpinner: false,
		errorMsg: false,
	}

	showSpinner = () => {
		this.setState({
			showSpinner: true,
		})
	}

	hideSpinner = () => {
		this.setState({
			showSpinner: false,
		})
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
			this.setState({
				errorMsg: true,
			})
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
		this.showSpinner();

		db.collection('quizzes').doc(this.state.docId).get()
        .then((snapshot) => {
			this.setState({
				quizItems: snapshot.data().quizItems,
			});

			this.hideSpinner();

		}).catch(err => {
			this.setState({
				errorMsg: true,
			})
		})
	}

	setQuizItems = () => {
		this.showSpinner();

		db.collection('quizzes').doc(this.state.docId).get()
        .then((snapshot) => {

			const quizItems = snapshot.data().quizItems;
			const quizItem = {
				question: this.state.question,
				correctAnswer: this.state.correctAnswer,
				options: [...this.state.options, this.state.correctAnswer],
				id: this.state.quizItems.length + 1,
			}

			this.hideSpinner();

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
			}).catch(() => {
				this.setState({
					errorMsg: true,
				})
			})

		}).catch(() => {
			this.setState({
				errorMsg: true,
			})
		})
	}

	handleDeleteQuestion = (i) => {
		this.showSpinner();

		const quizItems = this.state.quizItems;
		quizItems.splice(i, 1);

		db.collection("quizzes").doc(this.state.docId).update({
			quizItems
		}).then(() => {
			this.hideSpinner();
			this.getQuizItems();
		}).catch(() => {
			this.setState({
				errorMsg: true,
			})
		})
    }

	handleSubmit = (e) => {
		e.preventDefault();
		this.setQuizItems();
	}

	render() {
		const error = this.state.errorMessage
		? (<p className="error-msg">Sorry, something went wrong. Please try again.</p>)
		: ""

		return(
			<div>
				{this.state.showSpinner
				? (<div className="spinner"></div>)
				: "" }

				<Link to="/">Back to main page</Link>
				<div className="container">
					{!this.state.isTitleSubmitted
						? (
							<TitleForm
								onSubmit={this.handleQuizTitleSubmit}
								onChange={this.handleChange}
								value={this.state.title}/>
						)
						: (
							<QuestionForm
								onSubmit={this.handleSubmit}
								onChange={this.handleChange}
								title={this.state.title}
								question={this.state.question}
								correctAnswer={this.state.correctAnswer}
								onClick={this.handleClick}
								onChangeInput={this.handleChangeInput}
								inputField={this.state.inputField}/>
						)
					}

					{this.state.isSubmitted
						? <RenderPreview
							quizItems={this.state.quizItems}
							title={this.state.title}
							onDelete={this.handleDeleteQuestion} />
						: ""
					}

					{this.state.errorMsg
						? {error}
						: ""
					}
				</div>
			</div>
		)
	}
}

export default QuizForm
