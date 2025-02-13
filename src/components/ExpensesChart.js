import React from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const ExpensesChart = ({expenses}) => {
  
  const food = expenses.filter((item) => item.category === "food");
  const transportation = expenses.filter(
    (item) => item.category === "transportation"
  );
  const health = expenses.filter((item) => item.category === "health");
  const rent = expenses.filter((item) => item.category === "rent");
  const entertainment = expenses.filter(
    (item) => item.category === "entertainment"
  );
  const others = expenses.filter((item) => item.category === "others");

  const calculate = (arr) => {
    let sum = 0;
    let num = arr.map((item) => Number(item.amount));
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
  };

  const expense = [
    calculate(food),
    calculate(transportation),
    calculate(health),
    calculate(rent),
    calculate(entertainment),
    calculate(others),
  ];

  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
      },
    },
  };

  const pieData = {
    labels: [
      "food",
      "transportation",
      "health",
      "rent",
      "entertainment",
      "others",
    ],
    datasets: [
      {
        data: expense,
        backgroundColor: [
          "red",
          "yellow",
          "blue",
          "orange",
          "magenta",
          "brown",
        ],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <div className="pie-chart-container">
        <Pie data={pieData} options={options} color="invert" />
      </div>
    </div>
  );
};

export default ExpensesChart;
