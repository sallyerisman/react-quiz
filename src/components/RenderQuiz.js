import React from 'react'
import Options from "./Options"
import { db } from "../modules/firebase"

class RenderQuiz extends React.Component {

	state = {}

	render() {

		db.collection("quizzes").get(this.props.data.docId).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log("Working!!!");
				console.log(`${doc.id} => ${doc.data()}`);
			});
		});

		// const items = quizItems.map((item) => {
		// 	console.log("ITEM!!, item")
		// 	return (
		// 		<div key={item.id}>
		// 			<h2>{item.question}</h2>
		// 			<p>{item.correctAnswer}</p>

		// 			<Options options={item} />

		// 		</div>
		// 	)
		// })

		return (
			<form>
				{/* <h1>{title}</h1>
				{items} */}
			</form>
		)
    }
}

export default RenderQuiz
