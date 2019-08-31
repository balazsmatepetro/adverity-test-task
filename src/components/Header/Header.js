import React from 'react';
import logo from './logo.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-logo-container">
                <img src={logo} alt="logo" />
            </div>

            <div className="header-description-container">
                <h2>Programming Challenge</h2>
                <p>Javascript: datastructures, typeAhead, groupBy / filter, aggregates</p>
            </div>
        </header>
    );
}

export default Header;
