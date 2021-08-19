import { Component } from 'react';

class ReviewsWidget extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    GoodIncrement = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        })
    }
     NeutralIncrement = () => {
         this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }
     BadIncrement = () => {
         this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
            }
        })
    }
    countTotalFeedback = () => {
        return ( this.state.good + this.state.neutral + this.state.bad )
    }
    countPositiveFeedbackPercentage = () => {
        return Math.floor((this.state.good*100 /(this.state.neutral+this.state.bad+this.state.good)))
    }
    
  render() {
    return (
      <div>
        <h1>Please leave feedback </h1>
        <button type="button" onClick={this.GoodIncrement}>Good</button>
        <button type="button" onClick={this.NeutralIncrement}>Neutral</button>
        <button type="button" onClick={this.BadIncrement}>Bad</button>
        <div>
          <h2>Statistics</h2>
          <ul>
                    <li>Good:{this.state.good }</li>
                    <li>Neutral:{ this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{this.countTotalFeedback()}</li>
                    <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>

          </ul>
        </div>
      </div>
    );
  }
}

export default  ReviewsWidget