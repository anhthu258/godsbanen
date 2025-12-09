import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workshop from './pages/Workshop';
import Events from './pages/Events';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Hometest />} />*/}
          <Route path="/" element={<Workshop/>} />
          <Route path="/workshop" element={<Workshop/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
