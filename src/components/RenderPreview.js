import React from 'react'
import PreviewOptions from "./PreviewOptions"
import { Link } from 'react-router-dom';

const RenderPreview = props => {

	const { quizItems, title, onDelete, onDeleteQuiz, docId } = props;

	const quizItem = quizItems.map((item, i) => {
		return (
			<div className="eachQuestion container mr-auto" key={i}>
				<div className="question-preview-div">
					<h2 className="question-preview">{item.question}</h2>
					<span className="trash-icon" role="img" aria-label="Trash can" onClick={() => {onDelete(i)}}>🗑</span>
				</div>
				<PreviewOptions options={item.options}/>
			</div>
		)
	});

	return (
		<form>
			<h1>{title}</h1>
			{quizItem}
			<Link to="/" className="btn btn-secondary submit btn-done" >Done! Time to play!</Link>

			<p className="ask-delete">Changed your mind?</p>
			<Link
				to="/"
				className="btn btn-secondary btn-submit btn-delete"
				onClick={() => {onDeleteQuiz(docId)}}
			>Delete quiz
			</Link>
		</form>
	)
}

export default RenderPreview
