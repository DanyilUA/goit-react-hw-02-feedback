import countTotalFeedback from 'utilits/countTotalFeedback';
import countPositiveFeedbackPercentage from 'utilits/countPositiveFeedbackPercentage';
import PropTypes from 'prop-types';


export function Statistics({ options }) {
  const { good, neutral, bad } = options;

  return (
    <>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <div className="container">
          <ul>
            <li className="item">Good: {good}</li>
            <li className="item">Neutral: {neutral}</li>
            <li className="item">Bad: {bad}</li>
            <li className="item">total: {countTotalFeedback(options)}</li>
            <li className='item'>Positive Feedback: {countPositiveFeedbackPercentage(options)}%</li>
          </ul>
        </div>
      ) : (
        <p className="">No feedback given</p>
      )}
    </>
  );
}

countTotalFeedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};