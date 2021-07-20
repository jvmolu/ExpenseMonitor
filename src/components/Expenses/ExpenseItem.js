import ExpenseItemDate from './ExpenseItemDate'
import "./ExpenseItem.css"


function ExpenseItem(props) {

    return (
      <li className="expense-item">
        <ExpenseItemDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.price}</div>
        </div>
      </li>
    );
  }
  
  export default ExpenseItem;
  