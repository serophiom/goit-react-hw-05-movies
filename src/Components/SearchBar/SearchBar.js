import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { toast, Zoom } from 'react-toastify';
// import styles from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = event => {
    setMovieName(event.target.value.toLowerCase());
    };

  const handleSearchSubmit = e => {
    e.preventDefault();

    onSubmit(movieName);
    setMovieName('');
  };
return (
    <div className="container">
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={handleSearchSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search movies"
              value={movieName}
              onChange={handleNameChange}
              />
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>
          </form>
        </header>
</div>
)}

export default Searchbar;
