import React from 'react';
import { MDBBtn } from 'mdbreact';
import Card from './Card';
import {data} from './../dummy_data';

export default class Trivia extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total_questions: data.length,
      reset: false,
      card_data: data
    }
  }
  /*
  Shuffle flashcard on mount everytime
   */
  componentDidMount = () => {
    this.setState({
      card_data: this.shuffle(data)
    })
  }

  /*
  Logic to shuffle the trivia questions on every new load of the trivia challenge
   */
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

/*
  Logic that keeps track of the count and fetches the next question as well as
  the answer
 */
  handleNext = (count) => {
    //if count equals to total number of trivia questions, time to reset trivia
    if (count === this.state.total_questions){
      this.setState({
        reset:true
      })
    } else {
      this.setState({
        currentQuestion: this.state.card_data[count].question,
        currentAnswer: this.state.card_data[count].answer,
      })
    }
  }
  /*
  Function that handles the logic to restart the trivia challenge once all
  flashcards are visited.
   */
  restartNewTrivia = () => {
    this.setState({
      reset: false,
      card_data: this.shuffle(this.state.card_data)
    })
  }

  render(){
    return (
      <div>
       {/* logic to hide the flash cards when all questions have been seen*/}
        {!this.state.reset && (
          <Card
            question={this.state.currentQuestion ? this.state.currentQuestion : this.state.card_data[0].question}
            answer={this.state.currentAnswer ? this.state.currentAnswer : this.state.card_data[0].answer}
            handleNextQuestion={this.handleNext}
            totalQuestions={this.state.total_questions}
          />
        )}
        {/* logic to show the restart button only once all the questions have been displayed*/}
        {(this.state.reset) && (
          <MDBBtn onClick={this.restartNewTrivia} color="secondary" href="#" style={{ marginLeft:"43%", marginTop:"8%"}}>
            Restart Trivia
          </MDBBtn>
        )}
      </div>
    )
  }
}
