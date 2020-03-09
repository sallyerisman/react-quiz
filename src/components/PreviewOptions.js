import React from "react"

class PreviewOptions extends React.Component {
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<label key={j}>
					<input
						type="radio"
						name="option"
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

export default PreviewOptions
