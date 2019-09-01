import React from 'react'
import heart from './heart.svg'
import './Footer.scss'

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-text-made-with-love">
        Made with
        <div className="footer-heart-icon-container">
          <img className="footer-heart-icon" src={heart} alt="heart" />
        </div>
        by
      </div>
      <a href="https://github.com/balazsmatepetro" target="_blank">Balázs Máté Petró</a>
    </footer>
  )
}

export default Footer
