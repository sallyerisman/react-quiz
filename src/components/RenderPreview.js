import React from 'react'
import PreviewOptions from "./PreviewOptions"
import { Link } from 'react-router-dom';

class RenderPreview extends React.Component {

	render() {
		const quizItem = this.props.quizItems.map((item, i) => {
			return (
				<div className="gridContainer" key={i}>
					<div>
						<h2>{item.question}</h2>
						<PreviewOptions options={item.options}/>
					</div>
					<span className="trash-icon" role="img" aria-label="Trash can" onClick={() => {this.props.onDelete(i)}}>🗑</span>
				</div>
			)
        })
		return (
			<form>
				<h1>{this.props.title}</h1>
				{quizItem}
				<Link to="/" className="btn btn-secondary submit" >Save quiz</Link>
			</form>
		)
    }
}

export default RenderPreview
