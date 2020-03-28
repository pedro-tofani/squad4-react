import React, { Component } from 'react';
import { questionsBase } from '../services/getquestionsquiz';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nQuestion: 0,
      score: 0,
      questions: []
    };
  }

  componentDidMount() {
    console.log(questionsBase)
    const newQuestions = [];
    for (let i = 0; i < 4; i += 1) {
      let randomNumber = Math.floor(Math.random() * (questionsBase.length - 1));
      newQuestions.push(questionsBase.splice(randomNumber, 1));
    }
    this.setState({ questions: newQuestions })
  }

  validAnswer(i, validAnswer, n, s) {
    console.log(i, validAnswer);

    if (i === validAnswer - 1) this.setState({ nQuestion: n + 1, score: s + 25 })
  }

  render() {
    console.log(this.state);
    const { questions, nQuestion, score } = this.state;
    if (!questions.length) return <div>Loading...</div>
    console.log(questions[0]);
    return (
      <div>
        {questions[nQuestion][0].question}
        <ul>
          {questions[nQuestion][0].options.map((q, index) =>
            <button onClick={() => this.validAnswer(index, questions[nQuestion][0].correct, nQuestion, score)}>{q}</button>
          )}
        </ul>
      </div>
    )
  }
}

export default Quiz;