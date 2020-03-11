import React from "react"

const PlayOptions = (props) => {

	const { options, radioId, onSelection } = props;

	const allOptions = options.map((option, j) => {
		return (
			<div className="row">
				<label key={j}>
					<input
						className="btn btn-lg eachOption"
						type="button"
						name={radioId.id}
						value={option}
						onClick={onSelection}
					/> {}
				</label>
			</div>
		)
	})

	return (
		<div className="container">
			{allOptions}
		</div>
	)
}

export default PlayOptions
