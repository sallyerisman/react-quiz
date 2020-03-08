import React from 'react'
import Options from "./Options"

class RenderPreview extends React.Component {

	render() {
		const quizItem = this.props.quizItems.map((item, i) => {
			return (
				<div key={i}>
					<h2>{item.question}</h2>
					<Options options={item.options}/>
				</div>
			)
        })
		return (
			<form>
				{quizItem}
			</form>
		)
    }
}

export default RenderPreview
