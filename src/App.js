import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Cards />
      </main>
    </>
  );
}

export default App;
