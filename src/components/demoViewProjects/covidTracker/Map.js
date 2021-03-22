import React from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import numeral from "numeral";

const Map = ({ center, zoom, countries, casesType }) => {
  const casesColors = {
    cases: {
      hex: "#CC1034",
      multiplier: 300,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 300,
    },
    deaths: {
      hex: "#fb4143",
      multiplier: 1200,
    },
  };

  const showDataOnMap = (data, casesType) => {
    return data.map((country) => {
      return (
        <Circle
          key={country.country}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          pathOptions={{
            fillColor: casesColors[casesType].hex,
            color: casesColors[casesType].hex,
          }}
          fillOpacity={0.4}
          radius={
            Math.sqrt(country[casesType]) * casesColors[casesType].multiplier
          }
        >
          <Popup>
            <div className="info_container">
              <div className="info_flag">
                <img src={country.countryInfo.flag} alt={country.country} />
              </div>
              <div className="info_name font-weight-bold mt-4">
                {country.country}
              </div>
              <div className="info_descr">
                <div className="info_cases">
                  Cases:{" "}
                  <span
                    style={{ color: `${casesColors.cases.hex}` }}
                    className="font-weight-bold"
                  >
                    {numeral(country.cases).format("0,0")}
                  </span>
                </div>
                <div className="info_recovered">
                  Recovered:{" "}
                  <span
                    className="font-weight-bold"
                    style={{ color: `${casesColors.recovered.hex}` }}
                  >
                    {numeral(country.recovered).format("0,0")}
                  </span>
                </div>
                <div className="info_deaths">
                  Deaths:{" "}
                  <span
                    className="font-weight-bold"
                    style={{ color: `${casesColors.deaths.hex}` }}
                  >
                    {numeral(country.deaths).format("0,0")}
                  </span>
                </div>
              </div>
            </div>
          </Popup>
        </Circle>
      );
    });
  };

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
};

export default Map;
