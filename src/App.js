import React from 'react';
import './App.css';

import AggregatedResultPresenterList from './AggregatedResultPresenterList';

function App() {
  return (
    <div className="App">
      <AggregatedResultPresenterList numberOfClicks={100} numberOfImpressions={200} />
    </div>
  );
}

export default App;
