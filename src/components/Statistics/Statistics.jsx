import PropTypes from 'prop-types';
import { Notification } from 'components/Notification';
import {
  Title,
  StatList,
  StatGood,
  StatNeutral,
  StatBad,
  StatTotal,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return total > 0 ? (
    <>
      <Title>Statistics</Title>
      <StatList>
        <StatGood>Good: {good}</StatGood>
        <StatNeutral>Neutral: {neutral}</StatNeutral>
        <StatBad>Bad: {bad}</StatBad>
        <StatTotal>Total: {total}</StatTotal>
        <li>Positive feedback: {positivePercent}%</li>
      </StatList>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
