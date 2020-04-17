import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import Search from './components/Search';

function App() {
  const [covidGlobal, setCovidGlobal] = useState([]);
  const [covidCountries, setCovidCountries] = useState([]);
 

  useEffect(() => {
    const apiURL = `https://api.covid19api.com/summary`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        setCovidGlobal(response.data.Global);
        setCovidCountries(response.data.Countries);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      
      <Search />
      <Main covidGlobal={covidGlobal} />
      <CountryList covidCountries={covidCountries} />
    </div>
  );
}

export default App;
