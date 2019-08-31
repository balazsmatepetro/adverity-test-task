import React from 'react';
import './App.css';

import Search from '../Search/Search';
import DataLoaderMockyIo from '../../services/DataLoaderMockyIo';

function App() {
  return (
    <div className="App">
      <main>
        <Search loadData={new DataLoaderMockyIo().load} />
      </main>
    </div>
  );
}

export default App;
