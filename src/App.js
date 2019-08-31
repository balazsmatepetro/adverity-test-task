import React from 'react';
import './App.css';

import Search from './Search';
import DataLoaderDummy from './DataLoaderDummy';

function App() {
  return (
    <div className="App">
      <Search loadData={new DataLoaderDummy().load} />
    </div>
  );
}

export default App;
