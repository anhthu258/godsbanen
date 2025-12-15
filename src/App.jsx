import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Workshop from './pages/Workshop';
import Events from './pages/Events';
import Home from './pages/Home';
import Error from './pages/Error';
import Keramik from './pages/keramik';
import Booking from './pages/Booking';

function App() { 

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Hometest />} />*/}
          <Route path="/" element={<Home/>} />
          <Route path="/workshop" element={<Workshop/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/keramik" element={<Keramik/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
