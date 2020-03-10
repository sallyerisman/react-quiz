import React from "react"

const TitleForm = props => {
	return (
		<form onSubmit={props.onSubmit}>
			<div className="input-group mb-3">
				<input
					id="title"
					type="text"
					className="form-control"
					placeholder="Give your quiz a name"
					onChange={props.onChange}
					value={props.title}
				/>

				<div className="input-group-append">
					<button
						className="btn btn-secondary"
						type="submit"
						id="button-addon2"
					>Add title
					</button>
				</div>
			</div>
		</form>
	)
}

export default TitleForm
