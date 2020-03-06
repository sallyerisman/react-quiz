import React from "react"

class Options extends React.Component {
	render() {
		console.log("prop.options", this.props.options)
		return (
			<div></div>
		)
		// return (
		// 	{item.options.map((option, i) => {
		// 		return (
		// 			<label key={i}>
		// 				<input
		// 				type="radio"
		// 				name="option"
		// 				/> {option}
		// 			</label>
		// 		)
		// 	})}
		// )
	}
}

export default Options
