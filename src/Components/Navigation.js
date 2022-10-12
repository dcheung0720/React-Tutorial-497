import { NavLink } from 'react-router-dom';
import './Navigation.css';

const activation = ({isActive}) => isActive ? 'active' : 'inactive';


const Navigation = (courses) => {
  return(
  <nav>
    <NavLink to="/" className={activation}>Classes</NavLink>
    {/* <NavLink to="/edit" className={activation}>Users</NavLink> */}
  </nav>)
};

export default Navigation;