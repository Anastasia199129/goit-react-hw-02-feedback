import './App.css';
import Statistics from './components/statistics/Statistics';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonIncrement = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  // GoodIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // NeutralIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // BadIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) / (this.state.neutral + this.state.bad + this.state.good),
    );
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback </h1>
        <FeedbackOptions
          onButtonIncrement={this.onButtonIncrement}
          // goodIncrement={this.GoodIncrement}
          // neutralIncrement={this.NeutralIncrement}
          // badIncrement={this.BadIncrement}
        ></FeedbackOptions>

        <h2>Statistics</h2>

        {this.state.good || this.state.neutral || this.state.bad === true ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          'No feedback given'
        )}
      </div>
    );
  }
}

export default App;
