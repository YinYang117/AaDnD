import React from 'react';
import './landingPage.css'; // Import CSS file


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <h1 className="landing-page__title">Welcome to the Dungeons & Dragons Game</h1>
      </header>
      <main className="landing-page__content">
        <section className="landing-page__section">
          <h2 className="landing-page__section-title">About the Game</h2>
          <p className="landing-page__section-text">This is a web-based application built with React for our community to play and program a tabletop role-playing game.</p>
        </section>
        <section className="landing-page__section">
          <h2 className="landing-page__section-title">Get Started</h2>
          <p className="landing-page__section-text">To run the application locally, follow these steps:</p>
          <ol className="landing-page__section-list">
            <li className="landing-page__section-list-item">Clone the repository: <code>git clone https://github.com/YinYang117/AaDnD.git</code></li>
            <li className="landing-page__section-list-item">Install dependencies: <code>npm install</code></li>
            <li className="landing-page__section-list-item">Start the development server: <code>npm start</code></li>
          </ol>
        </section>
      </main>
      <footer className="landing-page__footer">
        <p className="landing-page__footer-text">© 2023 Dungeons & Dragons Game. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
