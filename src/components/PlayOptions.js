import React from "react"

class PlayOptions extends React.Component {
	
	render() {
		const options = this.props.options.map((option, j) => {
			return (
				<div>
					<label key={j}>
						<input
							className="mr-2 answer btn btn-lg"
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
				
			<div className="list-group">
				{options}
			</div>			
		)
	}
}

export default PlayOptions
