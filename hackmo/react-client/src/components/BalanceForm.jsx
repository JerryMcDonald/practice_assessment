import React from 'react';
import PropTypes from 'prop-types';

class BalanceForm extends React.Component {

  render() {
    return (
      <div>
        <input />
        <button> Get Balance </button>
      </div>
    );
  }
}

BalanceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BalanceForm;
