import data from "../assets/cardData.js";
import Card from "./Card.jsx";

const Specials = () => {
  return (
    <div className="font-karla pt-[40px] px-[5%] md:px-[10%]">
      <div className="flex items-baseline justify-between">
        <div className="">
          <h1 className="text-xl font-semibold">Specials</h1>
        </div>
        <div>
          <button className="bg-black text-white text-md mt-4 px-4 py-3 rounded-md hover:scale-105 transition-all duration-300">
            Online Menu
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap justify-between mt-4">
        {data.map((item, ind) => (
          <Card key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
