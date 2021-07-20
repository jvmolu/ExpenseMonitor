import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const onSubmitExpenseForm = (newExpense) => {
        props.onSubmitExpenseForm(newExpense)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseForm={onSubmitExpenseForm} />
        </div>
    )
}

export default NewExpense