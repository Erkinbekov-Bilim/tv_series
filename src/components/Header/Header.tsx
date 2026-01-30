import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={'/'} className="logo-name">
          TV Series
        </Link>
      </header>
    </>
  );
};

export default Header;
