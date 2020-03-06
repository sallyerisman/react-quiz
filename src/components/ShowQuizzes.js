import React from 'react'
import { db } from "../modules/firebase"
import { Link } from 'react-router-dom';


class ShowQuizzes extends React.Component{
    state = {
        quizNames: [],
    }
    componentDidMount() {
        this.getQuizNames();
    }
    getQuizNames = () => {
        db.collection('quizzes').get().then((snapshot) => {
            const quizNames = [];
            snapshot.forEach((doc) => {
                const eachName = {
                    title: doc.data().title,
                    id: doc.id
                }
                quizNames.push(eachName)
            });
            this.setState({
                quizNames: quizNames,
            })
        })
    }
    render() {
        const showName = this.state.quizNames.map((name) => {
            return (
                <div className="card col-sm-12 col-md-5">
                <Link to={"/play/" + name.id}>{name.title}</Link>
                </div>
            )
        })
        return(
            <div>
                <h1>All quizzes</h1>
				<Link to="/">Back to main page</Link>
                {showName}
            </div>
        )
    }
}
export default ShowQuizzes