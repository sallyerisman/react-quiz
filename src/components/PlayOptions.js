import React from "react"

class PlayOptions extends React.Component {
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<label key={j}>
					<input
						type="radio"
						name="option"
						value={option}
						onChange={this.props.onSelection}
					/> {option}
				</label>
			)
		})
		console.log("OPTIONS outside const",options)
		return (
			<div>
				{options}
			</div>
		)
	}
}

export default PlayOptions
