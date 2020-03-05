import React from 'react'
import { db } from "../modules/firebase"
class PlayQuiz extends React.Component{
    constructor(props) {
        super(props);
        this.state.quiz_id = this.props.match.params.id;
    }
    state = {
        quizItems: [],
        title: "",
        // answer: null,
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
            snapshot.data().quizItems.map((item) => {
                const quizItem = {
                    question: item.quizItem.question,
                    correctAnswer: item.quizItem.correctAnswer,
                    options: [item.quizItem.options]
                }
                quiz.push(quizItem)
            });
            this.setState({
                quizItems: quiz,
                title: snapshot.data().title
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
    render() {
        const eachQuizItem = this.state.quizItems.map((item) => {
            const eachOption = item.options[0].map((option, i) => {
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            // onChange={this.handleChange} />{x}
                        /> {option}
                    </label>
                )
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
                <h1>{this.state.title}</h1>
                {eachQuizItem}
            </div>
        )
    }
}
export default PlayQuiz