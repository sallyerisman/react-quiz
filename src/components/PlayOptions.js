import React from "react"

const PlayOptions = (props) => {

	const { options, radioId, onSelection } = props;
	

	const allOptions = options.map((option, j) => {

		let cssClasses = "btn btn-lg eachOption";
		if (props.quizIsSubmitted) {
			cssClasses += (option === props.correctAnswer) ? ' correctAnswer' : ' wrongAnswer';
		}
		
		return (
			<div key={j} className="row">
				<label>
					<input
						className={cssClasses}
						type="button"
						name={radioId.id}
						value={option}
						onClick={onSelection}
					/>
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
