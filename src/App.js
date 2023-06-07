import React, { useState } from "react";
import NewExpense from "./component/NewExpense/NewExpense";
import ExpensesFilter from "./component/Expenses/ExpenseFilter";
import ExpenseList from "./component/Expenses/ExpenseList";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "New Delhi",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Mumbai",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Patna",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Gujrat",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //   return React.createElement('div', null,
  //   React.createElement('h2', null, "Let's get started!"),
  //   expenses.map((expense) =>
  //     React.createElement(ExpenseItem, {
  //       key: expense.id,
  //       title: expense.title,
  //       amount: expense.amount,
  //       date: expense.date,
  //       location: expense.location
  //     })
  //   )
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

 

  return (
    <div>
      <h2>Let's get started!</h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items = {filteredExpenses}/>
    </div>
  );
};

export default App;
