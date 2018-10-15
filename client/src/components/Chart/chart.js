import React from "react";
import ChartistGraph from "react-chartist";

class Chart extends React.Component {
  render() {
    var data = {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],
      series: [
        [12, 17, 7, 17, 23, 18, 38, 12, 17, 7, 17, 23],
        [18, 25, 15, 23, 30, 25, 30, 20, 25, 15, 25, 30],
        [25, 30, 25, 30, 35, 35, 25, 25, 35, 25, 35, 35]
      ]
    };
    var options = {
      // high: 100,
      low: 0,
      showArea: true
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
