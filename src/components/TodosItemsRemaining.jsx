import React from 'react';
import PropTypes from 'prop-types';

TodosItemsRemaining.propTypes = {
  remaining: PropTypes.func.isRequired,
};

function TodosItemsRemaining(props) {
  return <span>{props.remaining()} items remaining</span>;
}

export default TodosItemsRemaining;
