import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{name: String, value: Number}} props The props of the component.
 */
function AggregatedResultPresenter(props) {
    return (
        <div className="aggregated-result-presenter">
            <div>{props.name}</div>
            <code>{props.value}</code>
        </div>
    );
}

AggregatedResultPresenter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired // TODO: It should accept only positive numbers!
};

export default AggregatedResultPresenter;
