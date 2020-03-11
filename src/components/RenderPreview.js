import React from 'react'
import PreviewOptions from "./PreviewOptions"
import { Link } from 'react-router-dom';

const RenderPreview = props => {

	const { quizItems, title, onDelete, onDeleteQuiz, docId } = props;

	const quizItem = quizItems.map((item, i) => {
		return (
			<div className="gridContainer" key={i}>
				<div>
					<h2>{item.question}</h2>
					<PreviewOptions options={item.options}/>
				</div>
				<span className="trash-icon" role="img" aria-label="Trash can" onClick={() => {onDelete(i)}}>🗑</span>
			</div>
		)
	});

	return (
		<form>
			<h1>{title}</h1>
			{quizItem}
			<Link to="/" className="btn btn-secondary submit" >Save quiz</Link>
			<Link
				to="/"
				className="btn btn-secondary"
				onClick={() => {onDeleteQuiz(docId)}}
			>Delete quiz
			</Link>
		</form>
	)
}

export default RenderPreview
