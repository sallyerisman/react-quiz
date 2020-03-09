import React from 'react'
import PreviewOptions from "./PreviewOptions"
import { Link } from 'react-router-dom';

class RenderPreview extends React.Component {

	render() {
		const quizItem = this.props.quizItems.map((item, i) => {
			return (
				<div key={i}>
					<h2>{item.question}</h2>
					<PreviewOptions options={item.options}/>
				</div>
			)
        })
		return (
			<form>
				<hi1>{this.props.title}</hi1>
				{quizItem}
				<Link to="/">Save quiz</Link>
			</form>
		)
    }
}

export default RenderPreview
