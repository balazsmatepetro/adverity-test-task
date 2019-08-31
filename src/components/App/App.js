import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import DataLoaderMockyIo from '../../services/DataLoaderMockyIo';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Search loadData={new DataLoaderMockyIo().load} />
      </main>
    </div>
  );
}

export default App;
