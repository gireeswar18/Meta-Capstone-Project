import logo from '../assets/Logo .svg';
import '../styles/navbar.css';

const Navbar = () => {
  return (
	<nav className='navbar'>
    <img src={logo} alt="logo" />
    <ul className='nav-links'>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Menu</a></li>
      <li><a href="">Reservations</a></li>
      <li><a href="">Order</a></li>
      <li><a href="">Login</a></li>

    </ul>
  </nav>
  )
}
export default Navbar