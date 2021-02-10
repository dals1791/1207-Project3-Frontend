import { Doughnut, Pie } from "react-chartjs-2";
import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartDoughnutLabels from "chartjs-plugin-doughnutlabel";
import "../App.css";

const PieChart = (props) => {
  const [chartData, setChartData] = React.useState({});
  const { transactions, budget, totalSpent } = props;

  console.log("Chart Transaction Props: ", transactions);
  console.log("Chart Budget Props: ", budget);

  /* ------------------------------------------------------
  - FUNCTION TO GET THE NON-REPEATING CATEGORIES FOR TRANSACTIONS
  ------------------------------------------------------ */

  //- Grab only the transactions that are isExpense: true. The stuff grabed are objects
  const totalExpenses = transactions.filter((transaction) => {
    return transaction.isExpense === true;
  });

  console.log("Total expense data: ", totalExpenses);

  // Get an array of just the categories from the transactions object -  NO DUPLICATE VALUES
  // CITATION --- https://www.codegrepper.com/code-examples/javascript/array+map+distinct
  const categories = totalExpenses
    .map((transaction) => transaction.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  /* ------------------------------------------------------
    1. Define an empty array of objects 'categoryTransact' - to hold each category's transactions info.
    1 b. Degine an empty array of objects 'categorySpent' - to hold the totalAmount spent and the 'category' it was spent on
    2. Loop through the CATEGORIES array. Filter all the items with the specific category. These items are objects.
    3. For every item in that same category, add up the 'AMOUNT' property
    4. Push the total amount spend from each category into the array of objects 'categorySpent'
  ------------------------------------------------------ */
  // ------ STEP 1 -------
  let categoryTransact = [];
  let categorySpent = [];

  // ------- STEP 2 -------
  console.log("Unique categories", categories);

  categories.forEach((category) => {
    let sum = 0;

    categoryTransact = totalExpenses.filter((transaction) => {
      return transaction.category === category;
    });
    // -- STEP 3 --
    categoryTransact.forEach((item) => (sum += item.amount));
    // -- STEP 4 ---
    categorySpent.push({
      category: category,
      totalAmout: sum,
    });
  });

  console.log("Total spending for each category: ", categorySpent);
  //MAP the totalAmount property in the array of objects into a new array with just the $ totalAmount
  const spendData = categorySpent.map((item) => item.totalAmout);

  // Push the remaining balance amount into the spendData array
  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // spendData.push(budget[0].income - spendData.reduce(reducer, 0));
  // Push "Remaining" as a category into the categories array
  //categories.push("Remaining");

  /* ------------------------------------------------------
     MAP OUT THE CATEGORIES INTO A <LI></LI>
    ------------------------------------------------------ */
  const chartLegend = categorySpent.map((item, index) => {
    return (
      <p key={index}>
        {item.category} : {item.totalAmout}
      </p>
    );
  });

  /* ------------------------------------------------------
     USE EFFECT TO SET THE CHART DATA 
    ------------------------------------------------------ */
  React.useEffect(() => {
    setChartData(
      {
        // labels: ["Remaining", "Food", "Bills", "Groceries", "Gas", "Pet Stuff"],
        labels: categories,
        datasets: [
          {
            label: "Spendings",
            //data: [1000, 325, 1240, 456, 350, 290],
            data: spendData,
            backgroundColor: [
              "rgba(201, 62, 62, .9)", // red
              "rgba(54, 162, 235, .9)", // blue
              "rgba(191, 146, 42, .9)", // gold
              "rgba(153, 102, 255, .9)", // purple
              "rgba(242, 147, 58, .9)", // orange
              // "rgba(38, 173, 108, 0.8)",
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
        width={50}
        height={50}
        options={{
          responsive: true,
          //Set this to false if you want to give chart a custom height/width.
          // If using size of div, set to true. Using true would be easier but lets experiment.
          maintainAspectRatio: true,
          plugins: {
            datalabels: {
              display: true,
              color: "#fff",
              formatter: function (value, context) {
                return `$${value}`;
              },
              backgroundColor: (context) => {
                return context.dataset.backgroundColor;
              },
              borderRadius: 3,
              font: function (context) {
                let width = context.chart.width;
                let size = Math.round(width / 16);
                return {
                  size: size,
                };
              },
            },
            doughnutlabel: {
              labels: [
                {
                  text: "Remaining",
                  font: {
                    size: "35",
                  },
                  color: "black",
                },
                {
                  text: "Balance",
                  font: {
                    size: "35",
                  },
                  color: "black",
                },
                {
                  text: `$ ${budget[0].income - totalSpent}`,
                  font: {
                    size: "32",
                  },
                  color: "green",
                },
              ],
            },
          },
          title: {
            display: false,
            text: "Monthly Spendings",
            fontSize: 30,
            align: "start",
            position: "top",
          },
          legend: {
            display: false,
            position: "bottom",
            align: "start",
            labels: {
              fontColor: "#08628e",
              //fontSize: 24,
              font: function (context) {
                let width = context.chart.width;
                let size = Math.round(width / 16);
                return {
                  size: size,
                };
              },
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

      <section>{chartLegend}</section>
    </div>
  );
};

export default PieChart;
