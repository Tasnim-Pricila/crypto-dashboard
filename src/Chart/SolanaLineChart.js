import { Line } from "react-chartjs-2";

const SolanaLineChart = () => {
 
  const solanaDatapoints = [7, 8, 7, 5, 9, 4, 10, 20, 15, 13, 10, 18, 17, 19];
  const DATA_COUNT = solanaDatapoints.length;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const solanaData = {
    labels: labels,
    datasets: [
      {
        label: labels,
        data: solanaDatapoints,
        fill: false,
        cubicInterpolationMode: "monotone",
        pointStyle: "hidden",
        borderColor: "#F0A0A0",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };
  return (
    <Line
      data={solanaData}
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

export default SolanaLineChart;
