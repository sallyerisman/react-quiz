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
    render() {
        const showTitle = this.state.quizTitles.map((title) => {
            return (
                <div className="card col-sm-12 col-md-5">
                <Link to={"/play/" + title.id}>{title.title}</Link>
                </div>
            )
        })
        return(
            <div>
                <h1>All quizzes</h1>
				<Link to="/">Back to main page</Link>
                {showTitle}
            </div>
        )
    }
}
export default ShowQuizzes
