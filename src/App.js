import React from 'react';
import MakeQuiz from './components/MakeQuiz'
import GetQuiz from './components/GetQuiz'

class App extends React.Component{
    render(){
        return (
        <div className="container">
            <h1>Quiz</h1>
            <main className="row">
                <div className="col-sm-12 col-md-6">
                    <MakeQuiz />
                </div>
                <div className="col-sm-12 col-md-6">
                    <GetQuiz />
                </div>
            </main>
        </div>
        );

    }
}

export default App;
