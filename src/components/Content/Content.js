import React from 'react';
import Search from '../Search/Search';
import DataLoaderMockyIo from '../../services/DataLoaderMockyIo';
import './Content.scss';

function Content() {
    return (
        <main className="content">
            <Search loadData={new DataLoaderMockyIo().load} />
        </main>
    );
}

export default Content;
