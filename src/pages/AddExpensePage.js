import React, { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiPencilLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { validateForm } from "../utils/helpers";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";  

const AddExpensePage = ({
  expenseToBeEdited,
  setExpenseToBeEdited,
  setExpenses,
}) => {
  const history = useHistory();
  const expense = expenseToBeEdited;
  const handleCancel = () => {
    setExpenseToBeEdited(null);
  };

  const [formData, setFormData] = useState({
    description: expense ? expense.description : "",
    amount: expense ? expense.amount : "",
    category: expense ? expense.category : "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAddExpense =  (e) => {
    e.preventDefault();
    if (
      validateForm(setErrors, formData, {
       
        description: true,
        amount: true,
        category: true,
      })
    ) {
      if(expense) {
        setExpenses((prevExpenses) =>
          prevExpenses.map((item) =>
            item.id === expense.id ? { ...item, ...formData } : item
          )
        );
        toast.success("Expense updated.");
      } else {
        setExpenses((prevExpenses) => [
          ...prevExpenses,
          {
            id:
              prevExpenses.length === 0
                ? 1
                : prevExpenses[prevExpenses.length - 1].id + 1,
            ...formData,
          },
        ]);
        

        toast.success("Expense added.");
      }
      handleCancel();
      history.push("/");
    } else {
      toast.error("Please fill out all fields correctly");
    }
  };
  return (
   <div className="add-expense">
     <form noValidate>
      <h3>{expense ? "Edit Expense" : "Add Expense"}</h3>
      <div className={`input-box ${errors.name && "error-input-box"}`}>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Enter Expense Description"
        />
        <span>
          <RiPencilLine />
        </span>
      </div>
      {errors.description && (
        <span className="error-msg">{errors.description}</span>
      )}

      <div className={`input-box ${errors.amount && "error-input-box"}`}>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Enter Expense Amount"
        />
        <span>
          <MdOutlineCurrencyRupee />
        </span>
      </div>
      {errors.amount && <span className="error-msg">{errors.amount}</span>}

      <div className={`input-box ${errors.category && "error-input-box"}`}>
        <select
          name="category"
          autoComplete="off"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="health">Health</option>
          <option value="rent">Rent</option>
          <option value="entertainment">Entertainment</option>
          <option value="others">Others</option>
        </select>
      </div>
      {errors.category && <span className="error-msg">{errors.category}</span>}

      <div className="cancel-and-add-btns">
        <button type="button" className="btn cancel-btn" onClick={handleCancel}>
          cancel
        </button>
        <button
          type="submit"
          onClick={handleAddExpense}
          className="btn add-btn"
        >
          {expense ? "update expense" : "add expense"}
        </button>
      </div>
    </form>
   </div>
  );
};
export default AddExpensePage;
