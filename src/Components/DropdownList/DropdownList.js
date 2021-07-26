import React, { useState, useEffect, useRef } from 'react';
import { DropdownInput } from '../';
import PropTypes from 'prop-types';

import './DropdownList.css';

export const DropdownList = ({ buttonTitle, title, placeholder, list, searchBy, onClickHandler, cards }) => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const dropdownRef = useRef(null);

  // handle buttons & set card options
  const handleClick = (data) => {
    setOpened(false);
    onClickHandler(data);

    if (!data) {
      setSelectedOption('');
      return;
    }
    setSelectedOption(data);
  }

  // click away listener
  useEffect(() => {
    document.addEventListener('mousedown', closeHandler,);
    return () => document.removeEventListener('mousedown', closeHandler,);
  }, []);

  // click away handler
  const closeHandler = e => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }

    setOpened(false);
  };

  return (
    <div ref={dropdownRef} className="dropdown-list-wrapper">
      <button
        onClick={() => setOpened(!opened)}
        className={`btn-primary ${!!selectedOption ? 'btn-active' : ''}`}>
        {buttonTitle} <i className={`fas fa-angle-down ${opened ? 'rotate180' : ''}`} />
      </button>

      {opened && (
        <div className="dropdown-list">
          <h3>{title}</h3>
          {placeholder && (<DropdownInput
            list={list}
            searchBy={searchBy}
            placeholder={placeholder}
            inputValue={selectedOption}
            onChangeCallback={data => setSelectedOption(data)}
          />)}

          <div className="dropdown-cards">
            {cards &&
              cards.map(({ value, name }) => (
                <div key={name} onClick={() => handleClick(value)} className="dropdown-card-item">{value}</div>
              ))}
          </div>

          <div className="dropdown-list-footer">
            <button onClick={() => handleClick()} className="dropdown-list-footer-cancel">Clear</button>
            <button onClick={() => handleClick(selectedOption)} className="dropdown-list-footer-apply"> Apply</button>
          </div>
        </div>
      )}
    </div>
  );
}

DropdownList.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBy: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
}