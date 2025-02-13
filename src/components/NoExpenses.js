import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NoExpenses = () => {
  return (
    <section className="no-expenses">
      <div className="section-center no-expenses-center">
        <h1>woohoo! no expenses in sight!</h1>
        <Link to="/add-expense" className="add-expense-btn">
          add expense <IoMdAddCircle />
        </Link>
      </div>
    </section>
  );
};

export default NoExpenses;
