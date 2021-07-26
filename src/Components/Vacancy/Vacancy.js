import React, { useEffect, useState } from 'react';
import { VacancyItem, DropdownList } from '../';
import './Vacancy.css';

const periodArray = [{ value: 1, name: '1d' }, { value: 3, name: '3d' }, { value: 7, name: '1w' }];

export const Vacancy = () => {
    const [vacancies, setVacancies] = useState([]);
    const [filteredVacancies, setFilteredVacancies] = useState([]);
    const [company, setCompany] = useState('');
    const [period, setPeriod] = useState(0);

    useEffect(() => {
        // simple submission of a request to the server
        fetch('http://localhost:5000/test/jobs')
            .then(res => res.json())
            .then(({ jobs }) => setVacancies(jobs));
    }, []);

    useEffect(() => {
        // filter vacancies
        let filteredArray = vacancies;
        if (company || period) {
            // if there is at least 1 filter selected - filter the records
            filteredArray = vacancies.filter((vacancy) =>
                (company ? (vacancy.companyName === company) : true) &&
                (period ? (parseInt(vacancy.postedDate) <= period) : true));
        }

        setFilteredVacancies(filteredArray);
    }, [company, period, vacancies])

    return (
        <div className="vacancy">
            <div className="vacancy-filter">
                <DropdownList
                    buttonTitle="Company"
                    title="Company name"
                    placeholder="e.g. Apple"
                    list={vacancies}
                    searchBy="companyName"
                    onClickHandler={(company = '') => setCompany(company)}
                />
                <DropdownList
                    buttonTitle="Date Posted"
                    title="Date Posted"
                    placeholder=""
                    list={vacancies}
                    searchBy="companyName"
                    onClickHandler={(days = 0) => setPeriod(days)}
                    cards={periodArray}
                />
            </div>
            <div className="vacancy-content">
                {filteredVacancies.slice(0, 10).map((arrItem, i) => (
                    <VacancyItem {...arrItem} key={i} />
                ))}
            </div>
        </div>
    );
}
