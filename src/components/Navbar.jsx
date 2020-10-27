import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            activeClassName="highlight"
            to="/"
            title="Back to home page"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="highlight"
            to="/contact"
            title="Contact form"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
