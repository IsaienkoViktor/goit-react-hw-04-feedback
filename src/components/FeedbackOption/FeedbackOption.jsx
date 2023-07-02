import PropTypes from 'prop-types';

import React from 'react';

export function FeedbackOption({ options, leaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          key={crypto.randomUUID()}
          type="button"
          name={option}
          onClick={leaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
