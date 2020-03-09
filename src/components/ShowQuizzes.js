import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';


class ShowQuizzes extends React.Component{
    state = {
        quizTitles: [],
    }
    componentDidMount() {
        this.getQuizTitles();
    }
    getQuizTitles = () => {
        db.collection('quizzes').get().then((snapshot) => {
            const quizTitles = [];
            snapshot.forEach((doc) => {
                const eachTitle = {
                    title: doc.data().title,
                    id: doc.id
                }
                quizTitles.push(eachTitle)
            });
            this.setState({
                quizTitles: quizTitles,
            })
        })
	}

	handleDelete = (id) => {
		db.collection("quizzes").doc(id).delete().then(() => {
			this.getQuizTitles();
		}).catch(err => {
			console.error(err)
		})
    }

    render() {
        const showTitle = this.state.quizTitles.map((title, i) => {
            return (
                <div key={i} className="quiz-list">
                <Link to={"/play/" + title.id}>{title.title}</Link>
				<span className="trash-icon" role="img" aria-label="Trash can" onClick={() => {this.handleDelete(title.id)}}>🗑</span>
                </div>
            )
        })
        return(
            <div className="container">
                <h1>All quizzes</h1>
				<Link to="/">Back to main page</Link>
                {showTitle}
            </div>
        )
    }
}
export default ShowQuizzes
