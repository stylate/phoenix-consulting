import React from 'react';
import '../layout/Home.css';

function Home() {
  return (
    <div>
      <div className="Home">
        <header className="Home-title">PHOENIX</header>
        <div className="Home-visual">
          <div className="Home-video-overlay"></div>
          <div className="Home-info">
            data-driven solutions for biotech, healthcare and pharmaceutical companies
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;