import CanvasJSReact from "@canvasjs/react-charts";
import React, { useEffect, useRef } from "react";
import './CanvasChart.css'

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      theme: "light2",
      height: 200,
      animationEnabled: true,
      exportEnabled: true,
      
      axisX: {
        valueFormatString: "MMM YY",
        interval: 1,
        intervalType: "year",
        // viewportMinimum: new Date("2017-07-01")
      },
      axisY: {
        prefix: "$",
        gridThickness: 0.3,
        gridColor: "#DDE1E4",
        interval: 1000,
        minimum: 19000,
        maximum: 23000
      },
      data: [
        {
          type: "candlestick",
          yValueFormatString: "$###0.00",
          xValueFormatString: "MMMM",
          risingColor: "#C0D9FD",
          fallingColor: "#3380FF",
          color: "#3380FF",
          dataPoints: [
            { x: new Date("2017-12-01"), y: [20000, 22000, 19500, 21000] },

            { x: new Date("2018-02-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2018-04-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2018-06-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2018-08-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2018-09-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2018-11-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2018-12-01"), y: [22000, 22500, 20000, 21000] },

            { x: new Date("2019-02-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2019-04-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2019-06-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2019-08-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2019-10-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2019-11-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2019-12-01"), y: [20000, 22000, 19500, 21000] },

            { x: new Date("2020-02-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2020-04-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2020-06-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2020-08-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2020-09-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2020-11-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2020-12-01"), y: [22000, 22500, 20000, 21000] },

            { x: new Date("2021-02-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2021-04-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2021-06-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2021-08-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2021-09-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2021-11-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2021-12-01"), y: [20000, 22000, 19500, 21000] },

            { x: new Date("2022-02-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2022-04-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2022-06-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2022-08-01"), y: [20000, 22000, 19500, 21000] },
            { x: new Date("2022-10-01"), y: [22000, 22500, 20000, 21000] },
            { x: new Date("2022-12-01"), y: [20000, 22000, 19500, 21000] },
          ],
        },
      ],
    };

    if (chartRef.current) {
      chartRef.current.render(options);
    }
  }, []);
  return (
      <CanvasJSChart options={{}} onRef={(ref) => (chartRef.current = ref)}/>
  );
};

export default CanvasChart;
