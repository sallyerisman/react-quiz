import React from "react"

const QuestionForm = props => {
	const { onSubmit, title, onChange, question, correctAnswer, onClick, inputField, onChangeInput } = props;

	return (
		<form onSubmit={onSubmit}>
			<h1>{title}</h1>
			<input
				id="question"
				type="text"
				className="form-control"
				required
				placeholder="Write quiz question"
				onChange={onChange}
				value={question}
			/>
			<div className="input-group mt-3 mb-3">
				<input
					id="correctAnswer"
					type="text"
					className="form-control"
					required
					placeholder="Provide correct answer"
					onChange={onChange}
					value={correctAnswer}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-secondary"
						type="button"
						id="button-addon2"
						onClick={onClick}
					>Add
					</button>
				</div>
			</div>
			{inputField
				? (
					inputField.map((item, index) => {
						const i = index;
						return (
							<div key={index} className="input-group mt-3 mb-3">
								<input
									id="option"
									type="text"
									className="form-control"
									placeholder="Add more answers"
									onChange={(e) => {onChangeInput(i, e)}}
									value={item}
								/>

								<div className="input-group-append">
									<button
										className="btn btn-secondary"
										type="button"
										id="button-addon2"
										onClick={onClick}
									>Add
									</button>
								</div>
							</div>
						)
					})
				)
				: ""
			}

			<button
				className="btn btn-secondary submit"
				type="submit"
				id="submit-btn"
			>Add another question
			</button>
		</form>
	)
}

export default QuestionForm
