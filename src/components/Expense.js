import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { toast } from "react-toastify";
import { formatAmount } from "../utils/helpers";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Expense = ({ expense, setFilteredExpenses, setExpenseToBeEdited,setExpenses }) => {
  const handleDelete = (id) => 
    {
    setFilteredExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    toast.success("Expense deleted");
  };

  const handleEdit = (expense) => {
    setExpenseToBeEdited(expense);
  };

  return (
    <article className="expense">
      <span>{expense.description}</span>
      <span>{formatAmount(expense.amount)}</span>
      <span>{expense.category}</span>
      <div className="expense-btns">
        <button
          type="button"
          className="expense-btn"
          onClick={() => handleDelete(expense.id)}
        >
          <AiFillDelete />
        </button>
        <Link
          to="/add-expense"
         
          className="expense-btn"
          onClick={() => {
            handleEdit(expense);
          }}
        >
          <BiSolidEdit />
        </Link>
      </div>
    </article>
  );
};

export default Expense;
