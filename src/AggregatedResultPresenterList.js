import React from 'react';
import PropTypes from 'prop-types';
import AggregatedResultPresenter from './AggregatedResultPresenter';

function AggregatedResultPresenterList(props) {
    return (
        <div className="aggregated-result-presenter-list">
            <AggregatedResultPresenter name="Clicks" value={props.numberOfClicks} />
            <AggregatedResultPresenter name="Impressions" value={props.numberOfImpressions} />
        </div>
    );
}

AggregatedResultPresenterList.propTypes = {
    numberOfClicks: PropTypes.number.isRequired,
    numberOfImpressions: PropTypes.number.isRequired
};

export default AggregatedResultPresenterList;
