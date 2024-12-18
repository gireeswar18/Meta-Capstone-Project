import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { date, time, guestCount, occasion } = location.state || {};

  return (
    <div className=" w-full h-screen bg-green-dark flex justify-center items-center font-karla">
      <div className="bg-white border border-[rgb(251,218,187)] p-4 w-[80%] md:w-[40%] lg:w-[25%]">
        <h1 className="text-center font-semibold text-xl">Booking Confirmed</h1>

        <h3 className="text-lg my-4 font-semibold text-center">Details</h3>
        <p>
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {time}
        </p>
        <p>
          <span className="font-semibold">Guest Count:</span> {guestCount}
        </p>
        <p>
          <span className="font-semibold">Occasion:</span> {occasion}
        </p>

        <button
          className="bg-black text-white text-md mt-4 px-4 py-3 rounded-md hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
