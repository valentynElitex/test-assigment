import React from 'react';
import PropTypes from 'prop-types';

import './VacancyItem.css';

export const VacancyItem = ({ jobTitle, companyName, shortDesc, postedDate, OBJurl }) => (
  <div
    onClick={() => window.open(OBJurl, '_blank').focus()}
    className="vacancy-item">
    <p> <i className="fas fa-pencil-ruler"></i>         {jobTitle}</p>
    <p> <i className="fas fa-building"></i>             {companyName}</p>
    <p> <i className="far fa-clock"></i>                {postedDate}</p>
    <p> <i className="fas fa-file-invoice-dollar"></i>  {shortDesc}</p>
  </div>
);


VacancyItem.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  OBJurl: PropTypes.string.isRequired
}