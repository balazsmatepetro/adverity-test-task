import React from 'react';
import './App.css';

import AggregatedResultPresenter from './AggregatedResultPresenter';

function App() {
  return (
    <div className="App">
      <AggregatedResultPresenter name="Clicks" value={10} />
      <AggregatedResultPresenter name="Impressions" value={20} />
    </div>
  );
}

export default App;
