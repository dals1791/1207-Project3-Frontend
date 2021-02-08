import { Doughnut, HorizontalBar, Line, Pie } from "react-chartjs-2";
import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartDoughnutLabels from "chartjs-plugin-doughnutlabel";

const PieChart = (props) => {
  const [chartData, setChartData] = React.useState({});

  React.useEffect(() => {
    setChartData(
      {
        labels: ["Remaining", "Food", "Bills", "Groceries", "Gas", "Pet Stuff"],
        datasets: [
          {
            label: "Spendings",
            data: [1000, 325, 1240, 456, 350, 290],
            backgroundColor: [
              "rgba(38, 173, 108, 0.8)",
              "rgba(201, 62, 62, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(191, 146, 42, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(242, 147, 58, 0.8)",
            ],
            borderWidth: 1,
            borderColor: "#fff",
            // hoverBorderWidth:3,
            // hoverBorderColor:'#000'
          },
        ],
      } // ----- END OF DATA OBJECT -----
    ); // ----- END OF SET CHART DATA FUNCTION -------
  }, []);

  return (
    <div
      className="chart"
      style={{
        border: "1px solid",
      }}
    >
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          //Set this to false if you want to give chart a custom height/width.
          // If using size of div, set to true. Using true would be easier but lets experiment.
          maintainAspectRatio: true,
          layout: {
            padding: 30,
          },
          // borderWidth: 2,
          // borderColor: "#000",
          plugins: {
            datalabels: {
              display: true,
              color: "#fff",
              backgroundColor: (context) => {
                return context.dataset.backgroundColor;
              },
              borderRadius: 3,
              font: {
                size: "30",
                //weight: "bold",
              },
            },
            doughnutlabel: {
              labels: [
                {
                  text: "Remaining",
                  font: {
                    size: "35",
                  },
                  color: "green",
                },
                {
                  text: "Balance",
                  font: {
                    size: "35",
                  },
                  color: "green",
                },
                {
                  text: "$1000.00",
                  font: {
                    size: "30",
                  },
                  color: "red",
                },
              ],
            },
          },
          title: {
            display: true,
            text: "Monthly Spendings",
            fontSize: 30,
            align: "start",
            position: "top",
          },
          legend: {
            display: false,
            position: "bottom",
            align: "center",
            labels: {
              fontColor: "#08628e",
              fontSize: 24,
              boxWidth: 100,
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  // beginAtZero: true,
                  // min: 10,
                  //max: 100,
                  display: false,
                  // maxTicksLimit: 5,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                  // stepSize: 4500,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default PieChart;
