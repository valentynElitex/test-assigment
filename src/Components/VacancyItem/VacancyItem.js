import React from 'react';
import './VacancyItem.css';

export const VacancyItem = ({ jobTitle, companyName, shortDesc, postedDate, OBJurl }) => {
  return (
    <div
      onClick={() => window.open(OBJurl, '_blank').focus()}
      className="vacancy-item">
      <p> <i className="fas fa-pencil-ruler"></i>         {jobTitle}</p>
      <p> <i className="fas fa-building"></i>             {companyName}</p>
      <p> <i className="far fa-clock"></i>                {postedDate}</p>
      <p> <i className="fas fa-file-invoice-dollar"></i>  {shortDesc}</p>
    </div>
  );
}


