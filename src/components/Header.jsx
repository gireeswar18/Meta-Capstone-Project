import { useNavigate } from 'react-router-dom';
import restaurant from '../assets/restaurant.jpg';

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="bg-green-dark font-karla text-white flex flex-col md:px-[10%] justify-between gap-8 md:gap-24 md:flex-row">
      <div className='md:w-[40%] p-4'>
        <h2 className="text-4xl font-bold">Little Lemon</h2>
        <h4>Chicago</h4>

        <p className='mt-8'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime distinctio, laudantium similique animi aperiam optio consectetur vero totam earum eveniet.
        </p>

        <button className='bg-black text-white text-md mt-4 px-4 py-3 rounded-md hover:scale-105 transition-all duration-300' onClick={() => navigate("/bookTable")}>Reserve a table</button>
      </div>
      <div className=' md:w-[30%] p-4 flex justify-center items-center'>
        <img src={restaurant} alt="restaurant image" className='w-full aspect-square max-w-full object-cover rounded-md'/>
      </div>

    </header>
  );
};
export default Header;
