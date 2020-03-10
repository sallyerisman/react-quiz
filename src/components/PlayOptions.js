import React from "react"

class PlayOptions extends React.Component {

	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<li key={j} className="list-group-item">
					<label>
						<input
							className="mr-2"
							type="checkbox"
							name={this.props.radioId.id}
							value={option}
							onChange={this.props.onSelection}
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

export default PlayOptions
