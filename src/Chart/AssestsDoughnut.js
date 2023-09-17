import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);
const AssestsDoughnut = () => {
  const assetsDatapoints = [55, 15, 10, 5]

  const assetsData = {
    // labels: ["BTC", "ETH", "ADA", "Others"],
    datasets: [
      {
        // label: labels,
        data: assetsDatapoints,
        backgroundColor: ["#3380FF", "#B1D3FF", "#00C4DF", "#155AB6"],
        
      },
    ],
  };
  return (
      <Doughnut
      // width={350}
        data={assetsData}
        options={{
          responsive: true,
          plugins: {
            datalabels: {
                display: true,
                color: "red"
            }
          },
          animation: {
            duration: 4000,
          },
          
        }}
      />
  );
};

export default AssestsDoughnut;
