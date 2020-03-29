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
      isAnswered: false,
    };
  }

  componentDidMount() {
    const newQuestions = [];
    for (let i = 0; i < 4; i += 1) {
      let randomNumber = Math.floor(Math.random() * (questionsBase.length));
      newQuestions.push(questionsBase.splice(randomNumber, 1));
    }
    this.setState({ questions: newQuestions })
  }

  validAnswer(i, validAnswer) {
    const { wrongAnswers } = this.state;
    const { questions, nQuestion } = this.state;
    this.setState({ isAnswered: true });
    if (i !== validAnswer - 1) {
      const newPush = [...wrongAnswers];
      newPush.push(questions[nQuestion][0])
      this.setState({ wrongAnswers: newPush })
    }
  }

  restart() {
    document.location.reload(true);
  }

  gamestart() {
    this.setState({ initGame: true });
  }

  getAnswers(validAnswer, i) {
    const { isAnswered } = this.state;
    if (i === validAnswer - 1 && isAnswered) return "green-border-quiz";
    if (i !== validAnswer - 1 && isAnswered) return "red-border-quiz";
    return '';
  }

  nextQuestion() {
    const { isAnswered, nQuestion } = this.state;
    if (isAnswered) this.setState({ isAnswered: false, nQuestion: nQuestion + 1 })
    if (nQuestion === 3) this.setState({endGame: true});
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
        <h2 className="question">
          {questions[nQuestion][0].question}
        </h2>
        <ul className="choices">
          {questions[nQuestion][0].options.map((q, index) =>
            <button key={q}
              className={`choice ${this.getAnswers(questions[nQuestion][0].correct, index)}`}
              onClick={() => this.validAnswer(index, questions[nQuestion][0].correct)}
            >{q}
            </button>
          )}
        </ul>
        <button
          className="playAgain"
          onClick={() => this.nextQuestion()}
        >Próxima questão!
        </button>
      </div>
    )
  }
}
export default Quiz;