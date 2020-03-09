import React from "react"

class PlayOptions extends React.Component {
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<label key={j}>
					<input
						type="checkbox"
						name={this.props.radioId.id}
						value={option}
						onChange={this.props.onSelection}
					/> {option}
				</label>
			)
		})

		return (
			<div>
				{options}
			</div>
		)
	}
}

export default PlayOptions
