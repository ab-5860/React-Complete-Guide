import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {

  // function clickHandler() {}

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  

  const expenseUpdate = () => {
      setAmount('100$');
      console.log(amount);
  }

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
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
        <ExpenseDetails amount = {amount} location = {props.location} title = {title} />
        <button onClick = {(expenseUpdate)}>Update Expense</button>
      <button onClick = {(clickHandler) }>Change Title</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
