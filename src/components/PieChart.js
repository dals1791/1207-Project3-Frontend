import { Doughnut, Pie } from "react-chartjs-2";
import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartDoughnutLabels from "chartjs-plugin-doughnutlabel";
import "../App.css";

const PieChart = (props) => {
  const [chartData, setChartData] = React.useState({});
  const { transactions, budget, totalSpent } = props;

  // console.log("Chart Transaction Props: ", transactions);
  // console.log("Chart Budget Props: ", budget);

  /* ------------------------------------------------------
  - FUNCTION TO GET THE NON-REPEATING CATEGORIES FOR TRANSACTIONS
  ------------------------------------------------------ */

  //- Grab only the transactions that are isExpense: true. The stuff grabed are objects
  const totalExpenses = transactions.filter((transaction) => {
    return transaction.isExpense === true;
  });

  // console.log("Total expense data: ", totalExpenses);

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

  console.log("categorySpent Array: ", categorySpent);
  //MAP the totalAmount property in the array of objects into a new array with just the $ totalAmount
  const spendData = categorySpent.map((item) => item.totalAmout);
  console.log("spendData array: ", spendData);

  // Push the remaining balance amount into the spendData array
  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // spendData.push(budget[0].income - spendData.reduce(reducer, 0));
  // Push "Remaining" as a category into the categories array
  //categories.push("Remaining");

  /* ------------------------------------------------------
  - MAKE OBJECT ARRAY TO HOLD THE CATEGORIES AND ITS COLORS.
  ------------------------------------------------------- */
  const legend = {
    "Food and Drink": "rgba(232, 159, 0, .9)",
    Grocery: "rgba(232, 220, 0, .9)",
    Utility: "rgba(111, 214, 0, .9)",
    "Rent/Mortgage": "rgba(0, 89, 214 , .9)",
    Gas: "rgba(116, 0, 224, .9)",
    Gift: "rgba(33, 243, 198, .9)",
    Clothing: "rgba(33, 22, 154, .9)",
    "Pet Supplies": "rgba(222, 32, 243, .9)",
    Travel: "rgba(212, 139, 4, .9)",
    Entertainment: "rgba(255, 145, 164 , .9)",
    Recreation: "rgba(140, 191, 57, .9)",
    Other: "rgba(153, 104, 47, .9)",
  };

  /* ------------------------------------------------------
    MAP  OUT THE COLORS FOR THE CHART LABEL
  ------------------------------------------------------ */
  let colorLabels = [];
  categories.forEach((category) => {
    colorLabels.push(legend[category]);
  });

  /* ------------------------------------------------------
    MAP  OUT THE COLORS FOR THE CHART LEGEND
  ------------------------------------------------------ */
  let legendFiltered = [];
  legendFiltered = categories.map((category) => {
    return {
      category: category,
      bgColor: legend[category],
    };
  });
  console.log(
    "legendFiltered with categories[] and colorLabels[] ",
    legendFiltered
  );

  const chartLegend = legendFiltered.map((item, index) => {
    return (
      <div className="legendLabel">
        <div
          className="labelIcon"
          style={{ backgroundColor: item.bgColor }}
        ></div>
        <p key={index}>{item.category}</p>
      </div>
    );
  });

  /* ------------------------------------------------------
     USE EFFECT TO SET THE CHART DATA 
    ------------------------------------------------------ */
  React.useEffect(() => {
    setChartData({
      labels: categories, // array holding the labels for categories spent
      datasets: [
        {
          label: "Spendings",
          data: spendData, // array holding the $$ amount spent for each cat
          backgroundColor: colorLabels, // array holding the rgba color tied to each cat
          borderWidth: 1,
          borderColor: "#fff",
        },
      ],
    });
  }, []);

  return (
    <div className="chart">
      <section className="dounut">
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
      </section>

      <section className="legend">{chartLegend}</section>
    </div>
  );
};

export default PieChart;
