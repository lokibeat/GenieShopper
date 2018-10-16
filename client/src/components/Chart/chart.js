import React from "react";
import ChartistGraph from "react-chartist";

class Chart extends React.Component {
  render() {
    var data = {
      labels: [
        "M1",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "M7",
        "M8",
        "M9",
        "M10",
        "M11",
        "M12"
      ],
      series: [
        [12, 17, 7, 17, 23, 18, 38, 12, 17, 7, 17, 23],
        [18, 25, 15, 23, 30, 25, 30, 20, 25, 15, 25, 30],
        [25, 30, 25, 30, 35, 35, 25, 25, 35, 25, 35, 35]
      ]
    };
    var options = {
      high: 40,
      low: 0,
      scaleMinSpace: 5,
      width: "1200px",
      height: "400px"
    };

    var type = "Line";

    return (
      <div>
        <ChartistGraph
          className="ct-chart"
          data={data}
          options={options}
          type={type}
        />
      </div>
    );
  }
}

export default Chart;
