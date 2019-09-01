import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.scss';

/**
 * @param {{message: String}} props The props of the component.
 */
function ErrorMessage(props) {
    return (
        <div className="error-message">
            <div className="error-message-header">Oh, something went wrong...</div>
            <div className="error-message-body">{props.message}</div>
        </div>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorMessage;
