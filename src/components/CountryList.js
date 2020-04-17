import React from 'react';
import SingleCountry from './SingleCountry';

function CountryList({ covidCountries }) {
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        {covidCountries.map((country, index) => (
          <SingleCountry key={index} country={country} />
        ))}
      </table>
      Data by: <a href="https://covid19api.com/">covid19api</a>
    </div>
  );
}

export default CountryList;
