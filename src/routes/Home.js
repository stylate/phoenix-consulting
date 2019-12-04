import React from 'react';
import '../layout/Home.css';
import phoenix from '../assets/PHOENIX.svg';

function Home() {

  React.useEffect(() => {
    let title = document.querySelector('.Home-title');
    let text = document.querySelector('.Home-info');
    title.classList.add('fade-in');
    text.classList.add('fade-in');
  });

  return (
    <div>
      <div className="Home">
        <div className="Home-title"><img src={phoenix}/></div>
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
