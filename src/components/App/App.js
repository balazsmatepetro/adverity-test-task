import React from 'react';
import './App.css';

import Search from '../Search/Search';
import DataLoaderMockyIo from '../../services/DataLoaderMockyIo';

function App() {
  return (
    <div className="App">
      <Search loadData={new DataLoaderMockyIo().load} />
    </div>
  );
}

export default App;
