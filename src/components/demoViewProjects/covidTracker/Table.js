import React from "react";

const Table = ({ countries, sortedData, tableStat }) => {
  return (
    <div className="app_table">
      <table>
        <tbody>
          {sortedData(countries).map(({ country, cases }) => {
            return (
              <tr key={country}>
                <td>{country}</td>
                <td className="font-weight-bold">{tableStat(cases)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
