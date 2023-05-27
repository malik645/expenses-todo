import React, { useState } from "react";

export default function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="container bg-success py-5">
          <div className="row ">
            <div className="col">
              <label>Title</label>
              <input
                type="text"
                value={enterTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="col">
              <label>Amount</label>
              <input
                type="number"
                value={enterAmount}
                onChange={amountChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Date</label>
              <input
                type="date"
                value={enterDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end ">
            <input
              type="Submit"
              value="Add Expenses"
              className="p-2 bg-primary btn text-light"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
