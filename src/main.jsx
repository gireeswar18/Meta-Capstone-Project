import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import BookingForm from "./components/BookingForm.jsx";
import BookingConfirmation from "./components/BookingConfirmation.jsx";
import Navbar from "./components/Navbar.jsx";
import AllBookings from "./components/AllBookings.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookTable" element={<BookingForm />} />
      <Route path="/bookingConfirmed" element={<BookingConfirmation />} />
      <Route path="/allBookings" element={<AllBookings />} />
    </Routes>
  </BrowserRouter>
);
