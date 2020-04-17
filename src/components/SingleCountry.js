import React from 'react';

function SingleCountry({ country }) {
  return (
    
    <tbody>
    <tr>
      <th scope="row">{country.Country}</th>
      <td>{country.TotalConfirmed}</td>
      <td>{country.TotalRecovered}</td>
      <td>{country.TotalDeaths}</td>
    </tr>
  </tbody>
    
  );
}

export default SingleCountry;
