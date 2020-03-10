import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';


class ShowQuizzes extends React.Component{
    state = {
		quizTitles: [],
		showSpinner: false,
		errorMsg: false,
    }
    componentDidMount() {
        this.getQuizTitles();
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

    getQuizTitles = () => {
		this.showSpinner();

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
			});

			this.hideSpinner();

        }).catch(() => {
			this.setState({
				errorMsg: true,
			})
		})
	}

	handleDelete = (id) => {
		this.showSpinner();

		db.collection("quizzes").doc(id).delete().then(() => {
			this.getQuizTitles();
			this.hideSpinner();
		}).catch(() => {
			this.setState({
				errorMsg: true,
			})
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
        return (
			<div>
				{this.state.showSpinner
					? (<div className="spinner"></div>)
					: "" }

				{this.state.errorMsg
					? (this.state.errorMsg)
					: (
						<div className="container">
							<h1>All quizzes</h1>
							<Link to="/">Back to main page</Link>
							{showTitle}
						</div>
					)
				}
			</div>
        )
    }
}
export default ShowQuizzes
