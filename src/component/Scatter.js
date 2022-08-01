import React from "react";
import ReactEcharts from "echarts-for-react";

const Scatter = () => {
  const option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [1, 14.23],
          [1.71, 2.43],
          [15.6, 127],
          [2.8, 3.06],
          [11.2, 100],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: "scatter",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      <h4>This is scatter chart</h4>
      <ReactEcharts option={option}></ReactEcharts>
    </div>
  );
};

export default Scatter;
