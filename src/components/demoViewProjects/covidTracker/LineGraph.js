import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0.0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
const casesColors = {
  cases: {
    color: "rgba(204,16,52,0.3)",
    border: "#CC1034",
  },
  recovered: {
    color: "#7dd71d",
    border: "#1db12d",
  },
  deaths: {
    color: "#fb4143",
    border: "#CC1014",
  },
};

const LineGraph = ({ casesType = "cases", ...props }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90")
        .then((res) => res.json())
        .then((data) => {
          const chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType]);
  const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };
  return (
    <div className={props.className}>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: casesColors[casesType].color,
                borderColor: casesColors[casesType].border,
                data,
              },
            ],
          }}
        ></Line>
      )}
    </div>
  );
};

export default LineGraph;
