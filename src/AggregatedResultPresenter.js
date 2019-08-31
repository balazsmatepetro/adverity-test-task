import React from 'react';

function AggregateResultPresenter(props) {
    return (
        <div className="aggregate-result-presenter">
            <div>{props.name}</div>
            <div>{props.value}</div>
        </div>
    );
}

export default AggregateResultPresenter;
