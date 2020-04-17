import React from 'react';

function Main({ covidGlobal }) {
  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = covidGlobal;
  // console.log(Global)
  // const { NewConfirmed } = Global
  return (
    <div>
      <div className="container">
        <div className="row mx-md-n5">
          <div className="col-sm mt-3">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">New Confirmed</h5>
                
                <h1>
                  <p className="card-text text-info">{NewConfirmed}</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm mt-3">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">New Deaths</h5>
                
                <h1>
                  <p className="card-text text-danger">{NewDeaths}</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm mt-3">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">New Recovered</h5>
                
                <h1>
                  <p className="card-text text-success">{NewRecovered}</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-md-n5">
          <div className="col-sm mt-2">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">Total Confirmed</h5>
                
                <h1>
                  <p className="card-text text-info">{TotalConfirmed}</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm mt-2">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">Total Deaths</h5>
               
                <h1>
                  <p className="card-text text-danger">{TotalDeaths}</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm mt-2">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">Total Recovered</h5>
                
                <h1>
                  <p className="card-text text-success">{TotalRecovered}</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
