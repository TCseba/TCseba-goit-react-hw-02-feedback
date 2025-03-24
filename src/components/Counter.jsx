import React, { useState } from 'react';

export default function Counter() {
  const [data, setData] = useState({
    WOOW: 0,
    Good: 0,
    Meh: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(data).reduce((total, values) => total + values, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positivePercentage = Math.round((data.good / totalFeedback) * 100);
    return `${positivePercentage}%`;
  };

  const handleClick = type => {
    setData(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <div>
        <button onClick={() => handleClick('good')}>WOOW!</button>
        <button onClick={() => handleClick('neutral')}>Good</button>
        <button onClick={() => handleClick('bad')}>Meh</button>
      </div>
      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <div>
          <h2>Statistics</h2>
          <p>WOOW!: {data.good}</p>
          <p>Good: {data.neutral}</p>
          <p>Meh: {data.bad}</p>
          <p>Total feedback: {totalFeedback}</p>
          <p>Positive percentage: {countPositiveFeedbackPercentage()}</p>
        </div>
      )}
    </div>
  );
}
