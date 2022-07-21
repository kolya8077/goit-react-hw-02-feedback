import React, { Component } from 'react';
import { Buttons } from 'components/Buttons/Buttuns';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from 'components/feedback.style';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  ratingPlus = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  getTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positiveRating() {
    const { good } = this.state;
    return Math.round((good * 100) / this.getTotal());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Container>
        <h2>Please leave feedback</h2>
        <Buttons options={options} ratingPlus={this.ratingPlus} />
        <h2>Statistics</h2>
        {this.getTotal() > 0 ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            getTotal={this.getTotal()}
            positiveRating={this.positiveRating()}
          />) : (<Notification message="There is no feedback" />)
          
        }
      </Container>
    );
  }
}

export default App;
