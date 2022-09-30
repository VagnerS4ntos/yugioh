import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
