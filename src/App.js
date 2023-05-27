import react, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import UseEffect from "./components/UseEffect";
import { expensesData } from "./constant/ExpensesData";

function App() {
  debugger
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense) => {
 
    const updatedExpense =[expense, ...expenses]
    setExpenses(updatedExpense)
  
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses cardsArray={expenses} />
      <UseEffect />
    </div>
  );
}

export default App;
