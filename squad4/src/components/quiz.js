import React, { Component } from 'react';
import { questionsBase } from '../services/getquestionsquiz';
import '../quiz.css';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nQuestion: 0,
      questions: [],
      endGame: false,
      wrongAnswers: [],
      initGame: false,
    };
  }

  componentDidMount() {
    const newQuestions = [];
    for (let i = 0; i < 4; i += 1) {
      let randomNumber = Math.floor(Math.random() * (questionsBase.length - 1));
      newQuestions.push(questionsBase.splice(randomNumber, 1));
    }
    this.setState({ questions: newQuestions })
  }

  validAnswer(i, validAnswer, n, s) {
    const { wrongAnswers } = this.state;
    const { questions, nQuestion } = this.state;
    if (i !== validAnswer - 1) {
      const newPush = [...wrongAnswers];
      newPush.push(questions[nQuestion][0])
      this.setState({ wrongAnswers: newPush, nQuestion: nQuestion + 1 })
    }
    this.setState({ nQuestion: nQuestion + 1 })
    if (n === 3) this.setState({ endGame: true })
  }

  restart() {
    document.location.reload(true);
  }

  gamestart() {
    this.setState({ initGame: true });
  }

  render() {
    const { questions, nQuestion, endGame, wrongAnswers, initGame } = this.state;
    if (!initGame) return (
      <div className="container">
        <button className="playAgain" onClick={() => this.gamestart()}>Jogar!</button>
      </div>
    )
    if (!questions.length) return <div>Loading...</div>
    if (endGame) return (
      <div className="container">
        {wrongAnswers.map(ans => {
          return (
            <div key={ans.question}>
              <p className="gameOver">{ans.question}</p>
              <p className="gameOver">{ans.options[ans.correct - 1]}</p>
              <p className="gameOver">{ans.explanation}</p>
            </div>
          )
        })}
        <button className="playAgain" onClick={() => this.restart()}>Jogar novamente!</button>
      </div>
    )
    return (
      <div className="container">
        <h2 id="question">
          {questions[nQuestion][0].question}
        </h2>
        <ul className="choices">
          {questions[nQuestion][0].options.map((q, index) =>
            <button key={q} className="choice" onClick={() => this.validAnswer(index, questions[nQuestion][0].correct, nQuestion)}>{q}</button>
          )}
        </ul>
      </div>
    )
  }
}
export default Quiz;