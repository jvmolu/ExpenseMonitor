import {useState} from 'react'
import ExpenseItemDate from './ExpenseItemDate'
import "./ExpenseItem.css"


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [index, setIndex] = useState(1);

    const clickHandler = () => {

      setIndex((prevIndex) => {
        return prevIndex + 1

      })

      setTitle("Updated " + props.title + " " + String(index) + " times!")

    }

    return (
      <div className="expense-item">

        <ExpenseItemDate date={props.date} />

        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.price}</div>
        </div>

        <button onClick={clickHandler}> Change Title </button>

      </div>
    );
  }
  
  export default ExpenseItem;
  