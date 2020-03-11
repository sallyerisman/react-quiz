import React from "react"

const PreviewOptions = props => {
	const options = props.options.map((option, j) => {
		return (
			<div key={j} className="row">
				<label>
					<input
						className="btn btn-lg eachOption"
						type="button"
						value={option}
					/>
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

export default PreviewOptions
