import React, { Component } from 'react';
import { questionsBase } from '../services/getquestionsquiz';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nQuestion: 0,
      score: 0,
      questions: [],
      endGame: false,
      wrongAnswers: []
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

  validAnswer(i, validAnswer, n) {
    console.log(i, validAnswer);
    const { wrongAnswers } = this.state;
    const { questions, nQuestion } = this.state;
    if (i !== validAnswer - 1) {
      const newPush = [...wrongAnswers];
      newPush.push(questions[nQuestion][0])
      this.setState({ wrongAnswers: newPush, nQuestion: nQuestion + 1 })
    }
    if (n === 3) this.setState({ endGame: true })
  }

  render() {
    console.log(this.state);
    const { questions, nQuestion, score, endGame } = this.state;
    if (!questions.length) return <div>Loading...</div>
    if (endGame) return <p>Fim de jogo</p>
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