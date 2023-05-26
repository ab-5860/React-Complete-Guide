import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React from 'react';

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('Clicked !!!!');
  }

  const deleteExpenseHandler = () => {
    console.log('Expense deleted!');
    // Remove the expense item from the DOM
    const expenseItem = document.getElementById(`expense-${props.id}`);
    if (expenseItem) {
      expenseItem.remove();
    }
  }

  return (
    <Card className = "expense-item">
      <ExpenseDate date = {props.date}/>
        <ExpenseDetails amount = {props.amount} location = {props.location} title = {props.title} />
      <button onClick = {(clickHandler) }>Change Title</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
