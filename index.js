import React from 'react';
import './App.css';

function App() {
  return (
    <div className="background-container">
      <header>
        <a href="index.html">
          <img src="images/ReLiveLogoWHITE TRANSPARENT.png" className="logo" alt="ReLive Logo" />
          <img src="images/ReLiveLogoRED TRANSPARENT.png" className="logo-hover" alt="ReLive Logo" />
        </a>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="https://www.linkedin.com/in/reliverecordings/" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a href="mailto:rob@reliverecordings.co.uk">Contact</a></li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      </header>

      <main>
        <div className="youtube">
          <iframe title="ReLive Recordings Youtube Playlist" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiuakQKNi2lRob27UGqTdmESXvWlcXSGK" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="spotify">
          <iframe title="ReLive Recordings Spotify Playlist" src="https://open.spotify.com/embed/playlist/1x7O9sFDGfKgOf5Ki9ZGO6" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </main>

      <footer>
        <p className="copyright">
          <a href="index.html">&copy; re:liverecordings</a>
        </p>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/reliverecordings/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/reliverecordings/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/reliverecording" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reliverecordings/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://reliverecordings.tumblr.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
