import React from "react";

const AllBookings = () => {
  const keys = Object.keys(localStorage).filter((key) =>
    key.startsWith("reservation_")
  );
  const reservations = keys.map((key) => JSON.parse(localStorage.getItem(key)));

  return (
    <div className="h-screen bg-green-dark font-karla text-[rgb(251,218,187)] px-[10%] md:px-[20%]">
      <h1 className="text-2xl text-center py-4 font-semibold">All Bookings</h1>

      <ul className="space-y-4">
        {reservations.map((r) => (
          <li className="border border-[rgb(244,206,20)] p-4 rounded-md">
              <p>
                <span className="font-semibold">Date:</span> {r.date}
              </p>
              <p>
                <span className="font-semibold">Time:</span> {r.time}
              </p>
              <p>
                <span className="font-semibold">Guest Count:</span> {r.guestCount}
              </p>
              <p>
                <span className="font-semibold">Occasion:</span> {r.occasion}
              </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBookings;
