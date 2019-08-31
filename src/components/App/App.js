import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import DataLoaderMockyIo from '../../services/DataLoaderMockyIo';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <Search loadData={new DataLoaderMockyIo().load} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
