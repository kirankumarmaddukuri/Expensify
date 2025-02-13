import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { IoMdDownload } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { GrClear } from "react-icons/gr";
import { toast } from "react-toastify";
import Expense from "./Expense";
import ExpensesChart from "./ExpensesChart";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Expenses = ({
  expenses,
  setExpenses,
  expenseToBeEdited,
  setExpenseToBeEdited,
}) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const handleClearExpenses = () => {
    setExpenses([]);
    setFilteredExpenses([]);
    toast.success("Expenses cleared.");
  };
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = expenses.filter((expense) =>
      expense.description.toLowerCase().includes(searchValue)
    );
    setFilteredExpenses(filtered);
  };
  return (
    <section className="expenses section-center section">
      <div className="expense-controls">
        <article className="expense-control">
          <span>
            <FaPlus />
          </span>
          <Link to="/add-expense" className="expense-control-btn btn">
            add expense
          </Link>
        </article>
        <article className="expense-control">
          <span>
            <IoMdDownload />
          </span>
          <CSVLink data={expenses} filename={"expenses.csv"}>
            <button type="button" className="expense-control-btn btn">
              download expenses
            </button>
          </CSVLink>
        </article>
        <article className="expense-control">
          <span>
            <GrClear />
          </span>
          <button
            type="button"
            onClick={handleClearExpenses}
            className="expense-control-btn btn"
          >
            clear expenses
          </button>
        </article>
      </div>
      <div className="expenses-list">
        <input
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Search Expenses"
          className="search-input"
          onChange={handleSearch}
        />

        <div className="expense-headings">
          <h5>description</h5>
          <h5>amount</h5>
          <h5>category</h5>
          <h5>actions</h5>
        </div>
        {filteredExpenses.length === 0 ? (
          <p className="no-match">NO MATCH FOUND</p>
        ) : (
          <>
            {filteredExpenses.map((expense) => {
              return (
                <Expense
                  setFilteredExpenses={setFilteredExpenses}
                  expense={expense}
                  key={expense.id}
                  expenseToBeEdited={expenseToBeEdited}
                  setExpenses={setExpenses}
                  setExpenseToBeEdited={setExpenseToBeEdited}
                />
              );
            })}
          </>
        )}
      </div>
      <ExpensesChart expenses={expenses} />
    </section>
  );
};

export default Expenses;
