import { Line } from "react-chartjs-2";

const BitcoinLineChart = () => {
 
  const bitcoinDatapoints = [14, 15, 5, 7, 14, 10, 3, 5, 8, 17, 18, 25, 23, 16, 18, 21, 17, 13, 20, 21];
  const DATA_COUNT = bitcoinDatapoints.length;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const bitcoinData = {
    labels: labels,
    datasets: [
      {
        label: labels,
        data: bitcoinDatapoints,
        fill: false,
        cubicInterpolationMode: "monotone",
        pointStyle: "hidden",
        borderColor: "#F0C98C",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  return (
      <Line
        data={bitcoinData}
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
            suggestedMin: -10,
            suggestedMax: 200,
          },
          animation: {
            duration: 2000,
          },
        }}
      />
  );
};

export default BitcoinLineChart;
