import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './DropdownInput.css';

export const DropdownInput = ({ list, searchBy = 'name', placeholder = '', inputValue = '', onChangeCallback }) => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState(inputValue);
  const dropdownInputRef = useRef(null);

  const searchFilter = (searchValue) => {
    let lowerCaseQuery = searchValue.toLowerCase();
    // Simple representation of search, search by any char entry in text
    let filteredList = searchValue
      ? list.filter(x => x[searchBy].toLowerCase().includes(lowerCaseQuery))
      : list.filter((v, i, a) => a.indexOf(v[searchBy]) === i);
    return filteredList;
  };

  // click away listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, []);

  // click away handler
  const handleClick = e => {
    if (dropdownInputRef !== null || dropdownInputRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  // input handler
  const handleChange = e => {
    setSearchValue(e.target.value);
    if (!visible) {
      setVisible(true);
    }
  };

  // select input item handler
  const selectItem = item => {
    setSearchValue(item[searchBy]);
    onChangeCallback(item[searchBy]);
    setVisible(false);
  };

  return (
    <div className="container">
      <div tabIndex="0" className="input-container">
        <input
          className="dropdown-input"
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          onFocus={() => {
            // if (searchValue) {
            setVisible(true);
            // };
          }}
        />
      </div>

      <div ref={dropdownInputRef} className={`dropdown ${visible ? 'visible' : ''}`}>
        {visible && (
          <ul>
            {!list && (
              <li className="dropdown-item">
                no result
              </li>
            )}

            {list &&
              searchFilter(searchValue, list).map(vacancy => (
                <li
                  key={vacancy.jobId}
                  onClick={() => selectItem(vacancy)}
                  className="dropdown-item"
                >
                  <div className="item-text">{vacancy[searchBy]}</div>
                </li>
              )
              )}
          </ul>
        )}
      </div>
    </div >
  );
};

DropdownInput.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBy: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired,
}