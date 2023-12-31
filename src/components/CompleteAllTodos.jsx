import React from 'react';
import PropTypes from 'prop-types';

CompleteAllTodos.propTypes = {
  completeAllTodos: PropTypes.func.isRequired,
};

function CompleteAllTodos(props) {
  return (
    <div>
      <div onClick={props.completeAllTodos} className="button">
        Check All
      </div>
    </div>
  );
}

export default CompleteAllTodos;
