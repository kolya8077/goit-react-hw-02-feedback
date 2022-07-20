import React, { Component } from 'react';
import {
  Container,
  ItemButton,
  Button,
} from 'components/Feedback/feedback.style';

class Feedback extends Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    totalRating: 0,
  };

  // ratingPlusGood = () => {
  //   this.setState(prevState => ({
  //     goodValue: prevState.goodValue + 1 ,
  //   }));

  // };

  // ratingPlusNeutral = () => {
  //   this.setState(prevState => ({
  //     neutralValue: prevState.neutralValue + 1,
  //   }));
  // };

  // ratingPlusBad = () => {
  //   this.setState(prevState => ({
  //     badValue: prevState.badValue + 1,
  //   }));
  // };

  totalValue = () => {
    // this.setState(() => ({
    //   totalRating: this.state.goodValue + this.state.neutralValue + this.state.badValue,
    // }));
    // console.log(this
    // );

    console.log(this);

    const ratingPlusGood = this.setState(prevState => ({
      goodValue: prevState.goodValue + 1,
    }));

    const ratingPlusNeutral = this.setState(prevState => ({
      neutralValue: prevState.neutralValue + 1,
    }));

    const ratingPlusBad = this.setState(prevState => ({
      badValue: prevState.badValue + 1,
    }));

    this.totalRating = this.setState(prevState => ({
      totalRating: prevState.goodValue + prevState.neutralValue + prevState.badValue,
    }));
  };

  render() {
    const { goodValue, neutralValue, badValue, totalRating } = this.state;

    return (
      <Container>
        <h2>Please leave feedback</h2>
        <ItemButton>
          <li>
            <Button type="button" onClick={this.totalValue}>
              Good
            </Button>
          </li>
          <li>
            <Button type="button" onClick={this.totalValue}>
              Neutral
            </Button>
          </li>
          <li>
            <Button type="button" onClick={this.totalValue}>
              Bad
            </Button>
          </li>
        </ItemButton>
        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good: {goodValue}</span>
          </li>
          <li>
            <span>Neutral: {neutralValue}</span>
          </li>
          <li>
            <span>Bad: {badValue}</span>
          </li>
          <li>
            <span>Total:</span>
          </li>
          <li>
            <span>Positive feedback: {totalRating}%</span>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Feedback;
