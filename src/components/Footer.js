import React from "react";
import { MDBIcon, MDBBtn } from 'mdbreact';

/*
Component that renders the footer for the application
 */

export default class Footer extends React.Component {

  onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/shrutisatish/", '_blank');
  }

  onGithubClick = () => {
    window.open("https://github.com/shrutisatish", '_blank');
  }

  render(){
    return (
      <div className="footer">
        <div className="fa fa-more"></div>
        <span>
           {new Date().getFullYear()}: Shruti Satish
        </span>
        <MDBBtn onClick={this.onLinkedInClick} size="lg" tag="a" floating social="li">
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>
        <MDBBtn onClick={this.onGithubClick} size="lg" tag="a" floating social="git">
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </div>
    )

  }

}
