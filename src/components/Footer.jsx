import logo from "../assets/Logo.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div className="link-section">
        <section>
          <ul>
            <h3>Doormat Navigation</h3>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <h3>Contact</h3>
            <li>
              <a href="">Address</a>
            </li>
            <li>
              <a href="">Phone Number</a>
            </li>
            <li>
              <a href="">Email</a>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <h3>Social Media Links</h3>
            <li>
              <a href="">Address</a>
            </li>
            <li>
              <a href="">Phone Number</a>
            </li>
            <li>
              <a href="">Email</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
