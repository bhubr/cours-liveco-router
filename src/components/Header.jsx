import PropTypes from 'prop-types';

function Header(props) {
  const { title, text } = props;
  return (
    <header className="App-header">
    <h1>{title}</h1>
    <p>{text}</p>
  </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
