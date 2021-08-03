import React from 'react';
import PropTypes from 'prop-types';

import './VacancyItem.css';

export const VacancyItem = ({ jobTitle, companyName, shortDesc, postedDate, OBJurl }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return (
    <div
      onClick={() => window.open(new URL(OBJurl), '_blank').focus()}
      className="vacancy-item">
      <span className="position-top-right-border">                                        Easy Apply</span>
      <span className="vacancy-item-icon" style={{ backgroundColor: `#${randomColor}` }}>       {companyName.charAt(0)}</span>

      <p className="vacancy-job-title">    <i className="fas fa-pencil-ruler"></i>        {jobTitle}</p>
      <p className="vacancy-compamy-name"> <i className="fas fa-building"></i>            {companyName}</p>
      <p className="vacancy-date">         <i className="far fa-clock"></i>               {postedDate}</p>
      <p className="vacancy-description">  <i className="fas fa-file-invoice-dollar"></i> {shortDesc}</p>
    </div>
  )
};


VacancyItem.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  OBJurl: PropTypes.string.isRequired
}