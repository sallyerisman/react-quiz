import React from "react"

class PlayOptions extends React.Component {
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<li className="list-group-item">
					<label key={j}>
						<input
							type="checkbox"
							name={this.props.radioId.id}
							value={option}
							onChange={this.props.onSelection}
						/> {option}
					</label>
				</li>
			)
		})
		console.log("OPTIONS outside const",options)
		return (
				
			<ul className="list-group">
				{options}
			</ul>			
		)
	}
}

export default PlayOptions
