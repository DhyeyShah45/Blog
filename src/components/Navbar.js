import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
  const { user } = useAuthContext();
  const {logout} = useLogout();

  const handleLogout = () => {
    logout()
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Blog here!</h1>
        {user && <div>{user.name}</div>}
      </Link>
      <div className="links">
        {!user ? (
          <div>
            <Link to="/user/login">Login</Link>
            <Link to="/user/signup">Signup</Link>
          </div>
        ) : (
          <div>
            <Link to="/create">New Blog</Link>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
          </div>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;
