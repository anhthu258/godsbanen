import "./App.css";
import { Routes, Route } from "react-router-dom";
import Workshop from "./pages/Workshop";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Keramik from "./pages/Keramik";
import Booking from "./pages/Booking";
import EventPiece from "./pages/EventPiece";

function App() {
  return (
    <>
        <Routes>
          {/*<Route path="/" element={<Hometest />} />*/}
          <Route path="/" element={<Home />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/keramik" element={<Keramik />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/eventpiece" element={<EventPiece />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </>
  );
}

export default App;
