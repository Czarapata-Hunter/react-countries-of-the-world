import * as React from 'react';
import './App.css';
import Footer from './components/layout/Footer/Footer.js';
import Header from './components/layout/Header/Header.js';
import Main from './components/Main/Main.js';
import background from '../src/earthbackground.jpg';

function App() {
  return (
    <section className="main" style={{ background: `url(${background})` }}>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
