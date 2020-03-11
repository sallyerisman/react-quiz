import React from "react"

const TitleForm = props => {

	const { onSubmit, onChange, title } = props;

	return (
		<form onSubmit={onSubmit}>
			<div className="input-group mb-3">
				<input
					required
					id="title"
					type="text"
					className="form-control"
					placeholder="Give your quiz a name"
					onChange={onChange}
					value={title}
				/>

				<div className="input-group-append">
					<button
						className="btn-question btn"
						type="submit"
						id="button-addon2"
					>Add
					</button>
				</div>
			</div>
		</form>
	)
}

export default TitleForm
