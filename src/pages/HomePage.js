import React from "react";
import Expenses from "../components/Expenses";
import NoExpenses from "../components/NoExpenses";

const HomePage = ({ expenses, setExpenses ,expenseToBeEdited,setExpenseToBeEdited}) => {
  return (
    <main>
      {expenses.length > 0 ? (
        <Expenses
          expenses={expenses}
          setExpenses={setExpenses}
          expenseToBeEdited={expenseToBeEdited}
          setExpenseToBeEdited={setExpenseToBeEdited}
        />
      ) : (
        <NoExpenses />
      )}
    </main>
  );
};

export default HomePage;
