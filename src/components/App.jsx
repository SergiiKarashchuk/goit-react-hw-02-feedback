import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  AddGoodReviews = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  AddNeutralReviews = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  AddBadReviews = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalReviewsCount = good + neutral + bad;
    const PositivReviewsCount = Math.round(
      ((good + neutral + bad - (bad + neutral)) / (good + neutral + bad)) * 100
    );
    return (
      <>
        <h2 className="title">Please leave feedback</h2>
        <div className="Button__reviews">
          <button type="button" onClick={this.AddGoodReviews}>
            Good
          </button>
          <button type="button" onClick={this.AddNeutralReviews}>
            Neutral
          </button>
          <button type="button" onClick={this.AddBadReviews}>
            Bad
          </button>
        </div>
        <h2 className="title">Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {totalReviewsCount}</p>
          <p>Positive Feedback: {PositivReviewsCount}%</p>
        </div>
      </>
    );
  }
}
