import React from "react";

const Card = ({ item }) => {
  return (
    <div className="md:w-[25%] w-full max-w-full border-2 rounded-tl-xl rounded-tr-xl rounded-bl-md rounded-br-md flex flex-col justify-between">
      <div className="w-full">
        <img
          src={item.image}
          alt="food image"
          className="w-full object-cover aspect-square rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="px-4">
        <div className="mt-4 flex justify-between">
          <h3 className="font-bold">{item.title}</h3>
          <h5 className="text-[rgb(244,206,20)]">{item.price}</h5>
        </div>

        <div className="mt-2">
          <p className="text-gray-500">{item.desc}</p>
        </div>
      </div>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-md ">
        Order a delivery
      </button>
    </div>
  );
};

export default Card;
