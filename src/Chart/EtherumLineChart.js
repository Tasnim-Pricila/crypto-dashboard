import { Line } from "react-chartjs-2";

const EtherumLineChart = () => {
 
  const ethereumDatapoints = [5, 4, 3, 1, 4, 2, 20, 7, 15, 13, 20];
  const DATA_COUNT = ethereumDatapoints.length;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const ethereumData = {
    labels: labels,
    datasets: [
      {
        label: labels,
        data: ethereumDatapoints,
        fill: false,
        cubicInterpolationMode: "monotone",
        pointStyle: "hidden",
        borderColor: "#9181DB",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Line
      data={ethereumData}
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

export default EtherumLineChart;
