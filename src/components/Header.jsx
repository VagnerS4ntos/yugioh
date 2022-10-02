import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCards } from './../store/sliceCards';

function Header() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <header className="container py-5 flex justify-center">
      <Link to="/">
        <img src="/logo.png" alt="Logo" className="w-40" />
      </Link>
    </header>
  );
}

export default Header;
