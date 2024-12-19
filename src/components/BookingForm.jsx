import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  const checkDate = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    return selectedDate >= currentDate;
  };

  const submitApi = () => {
    if (!date || !checkDate()) {
      alert("Please select a valid future date");
      return false;
    }

    if (!time) {
      alert("Please select a time");
      return false;
    }

    const parsedGuestCount = parseInt(guestCount, 10);
    if (
      isNaN(parsedGuestCount) ||
      parsedGuestCount < 1 ||
      parsedGuestCount > 10
    ) {
      alert("Please select between 1 and 10 guests");
      return false;
    }

    if (!occasion) {
      alert("Please select an occasion");
      return false;
    }

    return true;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (submitApi()) {

      const reservationKey = `reservation_${Date.now()}`;
      const reservationDetails = {
        date: date,
        time: time,
        guestCount: guestCount,
        occasion: occasion,
      };

      localStorage.setItem(reservationKey, JSON.stringify(reservationDetails))

      navigate("/bookingConfirmed", {
        state: {
          date: date,
          time: time,
          guestCount: guestCount,
          occasion: occasion,
        },
      });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-dark font-karla">
      <form
        className="flex flex-col w-[60%] border border-[rgb(251,218,187)] p-4 text-white rounded-md"
        onSubmit={formSubmitHandler}
      >
        <h1 className="text-center text-2xl font-semibold">Book Table</h1>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded-md text-neutral-600 bg-[rgb(251,218,187)] outline-none px-4"
          min={new Date().toISOString().split("T")[0]} // Prevents selecting past dates
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          className="py-2 rounded-md text-neutral-600 bg-[rgb(251,218,187)] outline-none px-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select a time</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          className="p-2 rounded-md text-neutral-600 bg-[rgb(251,218,187)] outline-none px-4"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="p-2 rounded-md text-neutral-600 bg-[rgb(251,218,187)] outline-none px-4"
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          className="bg-[rgb(238,153,114)] mx-auto px-3 py-2 md:px-4 md:py-3 mt-5 rounded-md md:rounded-xl text-xs md:text-base w-auto break-words max-w-[200px] whitespace-break-spaces cursor-pointer"
          aria-label="On Click"
        />
      </form>
    </div>
  );
};

export default BookingForm;
