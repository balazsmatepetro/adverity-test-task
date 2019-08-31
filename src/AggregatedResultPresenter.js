import React from 'react';
import PropTypes from 'prop-types';

function AggregatedResultPresenter(props) {
    return (
        <div className="aggregated-result-presenter">
            <div>{props.name}</div>
            <div>{props.value}</div>
        </div>
    );
}

AggregatedResultPresenter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired // TODO: It should accept only positive numbers!
};

export default AggregatedResultPresenter;
