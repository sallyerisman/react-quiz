import React from "react"

class PlayOptions extends React.Component {

	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<div className="row">
					<label key={j}>
						<input
							className="btn btn-lg eachOption"
							type="button"
							name={this.props.radioId.id}
							value={option}
							onClick={this.props.onSelection}
						/> {}
					</label>				
				</div>
			)
		})

		return (
				
			<div className="container">
					{options}
			</div>
		)
	}
}

export default PlayOptions
