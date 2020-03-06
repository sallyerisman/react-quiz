import React from 'react'

class RenderQuiz extends React.Component {

	render() {
		console.log("This.props.data", this.props.data.title)

		const { question, title, quizItems } = this.props.data

		// const options = this.props.input.map((options, index) => {
		// 	return 	<label key={index}>
		// 				<input
		// 					type="radio"
		// 					name="answer"
		// 					value={answer}
		// 				/> {answer}
		// 			</label>
		// })

		return (
			<form>
				<h1>{title}</h1>
				<h2>{question}</h2>
			</form>
		)

        // const eachQuizItem = this.state.quiz.map((item) => {
        //     const eachOption = item.options.map((option) => {
        //         return option.map((x, i) =>
        //             <label key={i}>
        //                 <input
        //                     type="radio"
        //                     name="option"
        //                     value={x}
        //                     // onChange={this.handleChange} />{x}
        //                 /> {x}
        //             </label>
        //         );
        //     })
        //     return (
        //         <form>
        //             <h2>{item.question}</h2>
        //                 {eachOption}
        //         </form>
        //     )
        // })
        // return(
        //     <div>
        //         <h1>Name of quiz</h1>
        //         {eachQuizItem}
        //     </div>
        // )
    }
}

export default RenderQuiz
