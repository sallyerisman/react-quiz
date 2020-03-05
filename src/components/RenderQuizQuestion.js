import React from 'react'

class RenderQuizQuestion extends React.Component{

	render(){



		console.log('QUESTION from render', this.props.question)
		console.log('RIGHT ANSWER from render', this.props.rightAnswer)
		console.log('ANSWERS from render', this.props.input)

		const answers = this.props.input.map((answer, index) => {
			return 	<label key={index}>
						<input
							type="radio"
							name="answer"
							value={answer}
						/> {answer}
					</label>
		})

		return(
			<form>
				<h2>{this.props.question}</h2>
				<label>
					<input type="radio" />{this.props.rightAnswer}
				</label>
				{answers}
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

export default RenderQuizQuestion
