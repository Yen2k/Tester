import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple Website</h1>
        <p>This is a simple website built with React.</p>
        <nav>
          <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home Section</h2>
          <p>Here’s the home section of the site.</p>
        </section>
        <section id="about">
          <h2>About Section</h2>
          <p>This website was created to demonstrate a basic React website.</p>
        </section>
        <section id="contact">
          <h2>Contact Section</h2>
          <p>Feel free to reach out via <a href="mailto:example@example.com">email</a>.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Simple Website</p>
      </footer>
    </div>
  );
}

export default App;
