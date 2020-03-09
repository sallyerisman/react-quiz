import React from 'react'
import PreviewOptions from "./PreviewOptions"

class RenderPreview extends React.Component {

	render() {
		const quizItem = this.props.quizItems.map((item, i) => {
			return (
				<div key={i}>
					<h2>{item.question}</h2>
					<PreviewOptions options={item.options}/>
					{/* <span className="trash-icon" role="img" aria-label="Trash can" onClick={ () => {this.props.onDelete(id)}}>🗑</span> */}
				</div>
			)
        })
		return (
			<form>
				<h1>{this.props.title}</h1>
				{quizItem}
			</form>
		)
    }
}

export default RenderPreview
