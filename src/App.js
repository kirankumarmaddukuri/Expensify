import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddExpensePage from "./pages/AddExpensePage";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseToBeEdited, setExpenseToBeEdited] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("data");
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      setExpenses(parsedData);
    } else {
      setExpenses([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage
            expenses={expenses}
            setExpenses={setExpenses}
            expenseToBeEdited={expenseToBeEdited}
            setExpenseToBeEdited={setExpenseToBeEdited}
          />
        </Route>
        <Route exact path="/add-expense">
          <AddExpensePage
            expenses={expenses}
            setExpenses={setExpenses}
            expenseToBeEdited={expenseToBeEdited}
            setExpenseToBeEdited={setExpenseToBeEdited}
          />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
