import React from 'react';
import AggregatedResultPresenter from './AggregatedResultPresenter';

function AggregatedResultPresenterList(props) {
    return (
        <div className="aggregated-result-presenter-list">
            <AggregatedResultPresenter name="Clicks" value={props.numberOfClicks} />
            <AggregatedResultPresenter name="Impressions" value={props.numberOfImpressions} />
        </div>
    );
}

export default AggregatedResultPresenterList;
