import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';


class PlayQuiz extends React.Component{
    constructor(props) {
        super(props);
        this.state.quiz_id = this.props.match.params.id;
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
    // handleChange = (e) => {
    // }
    getQuiz = () => {
        db.collection('quizzes').doc(this.state.quiz_id).get()
        .then((snapshot) => {
			const quiz = [];
			const answers = [];
            snapshot.data().quizItems.map((item) => {
                const quizItem = {
                    question: item.quizItem.question,
                    correctAnswer: item.quizItem.correctAnswer,
					options: [item.quizItem.options],
					id: item.quizItem.id
                }
				quiz.push(quizItem)
				answers.push(false)
            });
            this.setState({
				quizItems: quiz,
				answers: answers,
                title: snapshot.data().title
			})
			console.log("this state object", this.state.quizItems)
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
		// this.setState({
		// 	correctAnswers: correctAnswer
		// })

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

		console.log("after change", this.state)

        const eachQuizItem = this.state.quizItems.map((item, qiIndex) => {
            const eachOption = item.options[0].map((option, i) => {
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name={this.state.id}
                            value={option}
                            onChange={e => { this.handleChange(e, qiIndex) }}
                        /> {option}
                    </label>
                )
            })
            return (
                <div>
                    <h2>{item.question}</h2>
                        {eachOption}
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
                </div>
            )
        })
        return(
<<<<<<< HEAD
			<div>
				<Link to="/show">Back to quiz page</Link>
				<form onSubmit={this.handleSubmit}>
					<h1>{this.state.title}</h1>
					{eachQuizItem}
					<button className="btn">Submit</button>
				</form>



				<h1>Your score is: {this.state.points}</h1>
			</div>
=======
            <div>
			<Link to="/">Back to quiz page</Link>
                <h1>{this.state.title}</h1>
                {eachQuizItem}
            </div>
>>>>>>> master
        )
    }
}
export default PlayQuiz
