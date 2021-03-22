import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import LineGraph from "./LineGraph";
import "./covid.css";
import "leaflet/dist/leaflet.css";

//services
import Services from "./services/service";
const services = new Services();

const CovidTracker = () => {
  const [country, setCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    services.getWorldwide().then((data) => {
      setCountryInfo(data);
    });
  }, []);
  useEffect(() => {
    services.getCountriesData().then((data) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      setCountries(countries);
      setTableData(data);
      setMapCountries(data);
    });
    services.getCountriesData();
    return;
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const getResponse =
      countryCode === "worldwide"
        ? services.getWorldwide()
        : services.getCountry(countryCode);
    getResponse.then((data) => {
      setCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    });
  };
  return (
    <div className="container shadow p-1">
      <div className="demo_project_wrapper d-flex justify-content-center">
        <h3>Covid-19 Tracker with React.js and Material UI</h3>
      </div>
      <div className="app_covid">
        <div className="app_left">
          <div className="app_header">
            <h4 className="font-weight-bold">COVID-19 TRACKER</h4>
            <FormControl className="app_dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => {
                  return (
                    <MenuItem
                      key={country.value + Math.random()}
                      value={country.value}
                    >
                      {country.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="app_stats">
            <InfoBox
              active={casesType === "cases"}
              title="Today cases"
              cases={countryInfo.todayCases}
              total={countryInfo.cases}
              printStat={services.printStat}
              onClick={(e) => setCasesType("cases")}
            />
            <InfoBox
              active={casesType === "recovered"}
              casesType="recovered"
              title="Today recovered"
              cases={countryInfo.todayRecovered}
              total={countryInfo.recovered}
              printStat={services.printStat}
              onClick={(e) => setCasesType("recovered")}
            />
            <InfoBox
              active={casesType === "deaths"}
              title="Today deaths"
              cases={countryInfo.todayDeaths}
              total={countryInfo.deaths}
              printStat={services.printStat}
              onClick={(e) => setCasesType("deaths")}
            />
          </div>
          <Map
            casesType={casesType}
            key={mapCenter}
            center={mapCenter}
            zoom={mapZoom}
            countries={mapCountries}
          />
        </div>
        <div className="app_right">
          <Card>
            <CardContent>
              <h3>Table Covid Data</h3>
              <Table
                countries={tableData}
                sortedData={services.sortData}
                tableStat={services.tableStat}
              />
              <h4 className="mt-2">Worldwide new {casesType}</h4>
              <LineGraph className={"app_lineCraph"} casesType={casesType} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CovidTracker;
