import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import CardDetails from './card/CardDetails';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
