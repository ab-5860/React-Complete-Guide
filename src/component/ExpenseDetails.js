import './ExpenseDetails.css';

function ExpenseDetails(props)
{
    const title = props.title;
    const amount = props.amount;
    const location = props.location;

    return (
        <div>
        <h2>{title} </h2>
        <div className = "expense-item__price">${amount} </div>
        <h3 className="expense-item_description">{location}</h3>
        </div>
    )
    
}

export default ExpenseDetails;