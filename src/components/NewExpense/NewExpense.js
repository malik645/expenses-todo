import React from "react";
import ExpenseForm from "./ExpenseForm";
import expensArray from '../Expenses/ExpenseDate'

export default function NewExpense(props) {

    const saveExpenseDataHandler = (enterExpenseData) => {
      
      const expenseData = {
        ...enterExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
      
    };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
