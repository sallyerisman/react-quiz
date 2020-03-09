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
		correctAnswers: []
    }
    componentDidMount() {
        this.getQuiz();
    }

    getQuiz = () => {
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
				answers.push(false)
            });
            this.setState({
				quizItems: quiz,
				answers: answers,
                title: snapshot.data().title
			})
        })
        .catch((err) => {
            console.log('Error getting documents', err);
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
		const answers = [...this.state.answers]
		answers[qiIndex] = e.target.value;

		this.setState({
			answers: answers
		})
	}

    render() {
        const quizItem = this.state.quizItems.map((item, qiIndex) => {
			return (
				<div key={qiIndex}>
					<h2>{item.question}</h2>
					<PlayOptions options={item.options} radioId={this.state.quizItems}  onSelection={e => { this.handleChange(e, qiIndex) }}/>
				</div>
			)
        })

        return(
			<div>
				<Link to="/show">Back to quiz page</Link>
				<form onSubmit={this.handleSubmit}>
					<h1>{this.state.title}</h1>
					{quizItem}
					<button className="btn">Submit</button>
				</form>

				<h3>Your score is: {this.state.points}</h3>
			</div>
        )
    }
}
export default PlayQuiz
