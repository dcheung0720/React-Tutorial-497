import { NavLink } from 'react-router-dom';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
import './Navigation.css';


const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

const Navigation = (courses) => {
  return(
  <nav>
    <NavLink to="/" className={activation}>Classes</NavLink>
    <AuthButton />
    {/* <NavLink to="/edit" className={activation}>Users</NavLink> */}
  </nav>)
};

export default Navigation;