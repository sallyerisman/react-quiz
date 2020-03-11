import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom'
import PlayOptions from "./PlayOptions"


class PlayQuiz extends React.Component{
    constructor(props) {
        super(props);
        this.state.quizId = this.props.match.params.id;
    }
    state = {
        quizItems: [],
        title: "",
		points: null,
		answers: [],
		showSpinner: false,
		errorMsg: false,
		rightAnswers: [],
	}

    componentDidMount() {
        this.getQuiz();
	}

    getQuiz = () => {
		this.setState({
			showSpinner: true,
		})

        db.collection('quizzes').doc(this.state.quizId).get()
        .then((snapshot) => {
			const quiz = [];
			const answers = [];
            snapshot.data().quizItems.map((item) => {
                const quizItem = {
                    question: item.question,
                    correctAnswer: item.correctAnswer,
					options: item.options,
					id: item.id,
				}

				quiz.push(quizItem)
				quiz.sort(function (a, b) { return 0.5 - Math.random() })
				answers.push(false)
			});

            this.setState({
				quizItems: quiz,
				answers: answers,
				title: snapshot.data().title,
				showSpinner: false,
			});
        })
        .catch(() => {
            this.setState({
				errorMsg: <p>Sorry, something went wrong. Please try again.</p>,
			})
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const correctAnswer = this.state.quizItems.map(item => {
			return item.correctAnswer
		})

		let points = 0;
		this.state.answers.forEach((answer, i) => {
			if (answer === correctAnswer[i]) {
				points++;
			}
		});

		this.setState({
			points,
		})
	}

	handleChange = (e, qiIndex) => {
		// answer.classList.add("answerOption")
		e.target.classList.toggle("answerOption")

		const answers = [...this.state.answers]
		answers[qiIndex] = e.target.value;

		this.setState({
			answers: answers
		})	

	}

    render() {
        const quizItem = this.state.quizItems.map((item, qiIndex) => {
			return (
				<div key={qiIndex} className="eachQuestion container">
					<h2 className="questionNumb">Question {qiIndex + 1} of {this.state.answers.length}</h2>
					<div className="questionBackgroundTwo">
						<div className="questionBackground">
							<h2 className="question">{item.question}</h2>
						</div>
					</div>
					<PlayOptions options={item.options} radioId={this.state.quizItems}  onSelection={e => { this.handleChange(e, qiIndex) }}/>
				</div>
			)
        })

        return (
			<div>
				{this.state.showSpinner
					? <div className="spinner"></div>
					: "" }

				{this.state.errorMsg
					? this.state.errorMsg
					: (
						<div>
							<Link className="mainPage" to="/show">Back to quiz page</Link>
							<form onSubmit={this.handleSubmit}>
								<h1>{this.state.title}</h1>
								{quizItem}
								<button className="btn">Submit</button>
							</form>

							<h3 className="result">Your score is: {this.state.points}/{this.state.answers.length}</h3>
						</div>
					)
				}
			</div>
        )
    }
}
export default PlayQuiz
