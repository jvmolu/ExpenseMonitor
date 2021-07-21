import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const [formState, setFormState] = useState(0)

    const toggleForm = () => {
        setFormState(
            (prevState) => {
                return 1-prevState
            }
        )
    }

    const onSubmitExpenseForm = (newExpense) => {
        props.onSubmitExpenseForm(newExpense)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseForm={onSubmitExpenseForm} toggleForm={toggleForm} formState={formState} />
        </div>
    )
}

export default NewExpense