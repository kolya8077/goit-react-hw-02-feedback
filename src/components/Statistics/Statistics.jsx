import PropTypes from 'prop-types'

export const Statistics = ({
  good,
  neutral,
  bad,
  getTotal,
  positiveRating,
}) => {
  return (
    <ul>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total:{getTotal}</span>
      </li>
      <li>
        <span>Positive feedback: {positiveRating}%</span>
      </li>
    </ul>
  );
};

Statistics.propsTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  getTotal: PropTypes.number.isRequired,
  positiveRating: PropTypes.number.isRequired,
};