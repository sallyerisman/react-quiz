import React from "react"

const PreviewOptions = props => {
	const options = props.options.map((option, j) => {
		return (
			<li className="list-group-item">
				<label key={j}>
					<input
						type="checkbox"
						name="option"
					/>{option}
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

export default PreviewOptions
