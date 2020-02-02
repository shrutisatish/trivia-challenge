import React from 'react';
import Trivia from './components/Trivia';
import Header from './components/Header';
import Footer from './components/Footer';

/*
Main component that renders the trivia challenge
 */

function App() {
  return (
    <div>
      <Header/>
        <Trivia/>
      <Footer />
    </div>
  );
}

export default App;
