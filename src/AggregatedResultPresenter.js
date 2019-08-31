import React from 'react';

function AggregatedResultPresenter(props) {
    return (
        <div className="aggregate-result-presenter">
            <div>{props.name}</div>
            <div>{props.value}</div>
        </div>
    );
}

export default AggregatedResultPresenter;
