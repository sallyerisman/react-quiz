import React from "react"

class Options extends React.Component {
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<label key={j}>
					<input
						type="radio"
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

export default Options
