import React from "react"

class PreviewOptions extends React.Component {
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<li className="list-group-item">
					<label key={j}>
						<input
							type="checkbox"
							name="option"
						/> {option}
					</label>
				</li>
			)
		})

		return (
			<ul className="list-group">
				{options}
			</ul>
		)
	}
}

export default PreviewOptions
