import React from 'react';
import PropTypes from 'prop-types'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';

/*
Component that render the flash card component
 */
class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAnswer: false,
      count: 0
    }
  }
  /*
  Function that set state of showAnswe to true on button click
   */
  onShowAnswerClick = () => {
    this.setState({
      showAnswer: true
    })
  }

  /*
  Function that handles the fetching of the next question from the list of questions
   */
  handleNextQuestion = () => {
    this.setState({
      count: this.state.count + 1,
      showAnswer: false
    }, () => {
      this.props.handleNextQuestion(this.state.count)
    });
  }

  render(){
    return (
      <div>

      <MDBCard style={{ width: "22rem", top:"100px", marginLeft:"40%" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody style={{ height: "150px" }}>
          <MDBCardTitle style={{ textAlign:'center'}}>{this.props.question}</MDBCardTitle>
            {/*logic to hide button when answer is visible*/}
            {!this.state.showAnswer && (<MDBBtn color="secondary" href="#" style={{ marginLeft:"15%"}} onClick={this.onShowAnswerClick}>Click to see answer</MDBBtn>)}
            {this.state.showAnswer && (<MDBCardText style={{ textAlign:'center'}}>{this.props.answer}</MDBCardText>)}
        </MDBCardBody>
      </MDBCard>

      {/*logic to display next button only when answer is visible*/}
      {this.state.showAnswer && (<MDBIcon onClick={this.handleNextQuestion} style={{ marginLeft:"55%", marginTop:"8%"}} icon="arrow-right" size="lg"/>)}
      </div>

    )
  }
}

Card.propTypes ={
  imageSource: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  questionCount: PropTypes.func
};

export default Card;
