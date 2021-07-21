import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')

    const formSubmitHandler = (event) => {

        event.preventDefault();

        if(props.formState === 1)
        {
            const newExpense = {
                id : new Date().getTime(),
                title: title,
                price: Number(amount),
                date: new Date(date)
            }
    
            props.onSubmitExpenseForm(newExpense)    
            setTitle('')
            setAmount('')
            setDate('')
        }

        props.toggleForm()
    }

    const formCancelHandler = () => {
        setTitle('')
        setAmount('')
        setDate('')
        props.toggleForm()
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    if(props.formState === 0) {
        return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__actions" style={{textAlign: 'center'}}>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        )
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.00" step="0.01" onChange={amountChangeHandler} value={amount} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={date} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={formCancelHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm