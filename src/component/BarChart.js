import React from "react";
import ReactEcharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    xAxis: {
      type: "category",
      data: [
        "Alcohol",
        "Malic acid",
        "Alcohol",
        "Malic acid",
        "Alcohol",
        "Malic acid",
        "Alcohol",
        "Malic acid",
        "Alcohol",
        "Malic acid",
        "Alcohol",
        "Malic acid",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          1, 13.74, 1.67, 2.25, 16.4, 118, 2.6, 2.9, 0.21, 1.62, 5.85, 0.92,
          3.2, 1, 13.56, 1.73, 2.46, 20.5, 116, 2.96, 2.78, 0.2, 2.45, 6.25,
          0.98, 3.03, 1, 14.22, 1.7, 2.3, 16.3, 118, 3.2, 3, 0.26, 2.03, 6.38,
          0.94, 3.31, 1, 13.29, 1.97, 2.68, 16.8, 102, 3, 3.23, 0.31, 1.66, 6,
          1.07, 2.84, 1, 13.72, 1.43, 2.5, 16.7, 108, 3.4, 3.67, 0.19, 2.04,
          6.8, 0.89, 2.87, 2, 12.37, 0.94, 1.36, 10.6, 88, 1.98, 0.57, 0.28,
          0.42, 1.95, 1.05, 1.82, 2, 12.33, 1.1, 2.28, 16, 101, 2.05, 1.09,
          0.63, 0.41, 3.27, 1.25, 1.67, 2, 12.64, 1.36, 2.02, 16.8, 100, 2.02,
          1.41, 0.53, 0.62, 5.75, 0.98, 1.59, 2, 13.67, 1.25, 1.92, 18, 94, 2.1,
          1.79, 0.32, 0.73, 3.8, 1.23, 2.46, 2, 12.37, 1.13, 2.16, 19, 87, 3.5,
          3.1, 0.19, 1.87, 4.45, 1.22, 2.87, 2, 12.17, 1.45, 2.53, 19, 104,
          1.89, 1.75, 0.45, 1.03, 2.95, 1.45, 2.23, 2, 12.37, 1.21, 2.56, 18.1,
        ],
        type: "bar",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      <h4>This is bar chart</h4>
      <div>
        <ReactEcharts option={option} />
      </div>
    </div>
  );
};

export default BarChart;