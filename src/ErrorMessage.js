import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{message: String}} props The props of the component.
 */
function ErrorMessage(props) {
    return (
        <div className="error-message">{props.message}</div>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorMessage;
