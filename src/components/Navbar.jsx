import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" title="Back to home page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" title="Contact form">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
