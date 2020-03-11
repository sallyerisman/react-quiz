import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';


class ShowQuizzes extends React.Component {

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

		db.collection('quizzes').get()
			.then((snapshot) => {
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

    render() {
        const showTitle = this.state.quizTitles.map((title, i) => {
            return (
                <div key={i} className="quiz-list">
                	<Link to={"/play/" + title.id}>{title.title}</Link>
                </div>
            )
		})

        return (
			<div>
				{this.state.showSpinner
					? <div className="spinner"></div>
					: ""
				}

				{this.state.errorMsg
					? <p className="error">{this.state.errorMsg}</p>
					: (
						<div className="container">
							<Link className="mainPage" to="/"><i className="arrow left"></i>Back to main page</Link>
							<h1 className="allQuizHead">All quizzes</h1>
							{showTitle}
						</div>
					)
				}
			</div>
        )
    }
}

export default ShowQuizzes
