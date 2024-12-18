import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full md:flex-row justify-center items-center pt-8 md:justify-around px-[5%] font-markazi text-xl">
      <img src={logo} alt="logo" className="w-32 md:w-64" />
      <div className="flex gap-4 mt-4 md:gap-12">
        <section>
          <ul >
            <h3 className="text-md font-semibold">Doormat Navigation</h3>
            <li>
              <a href="" className="text-green-dark">Home</a>
            </li>
            <li>
              <a href="" className="text-green-dark">About</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Menu</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Reservations</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Order</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Login</a>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <h3 className="text-md font-semibold">Contact</h3>
            <li>
              <a href="" className="text-green-dark">Address</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Phone Number</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Email</a>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <h3 className="text-md font-semibold">Social Media Links</h3>
            <li>
              <a href="" className="text-green-dark">Address</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Phone Number</a>
            </li>
            <li>
              <a href="" className="text-green-dark">Email</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
