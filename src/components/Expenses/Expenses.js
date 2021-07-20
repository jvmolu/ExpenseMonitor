import {useState} from 'react'
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'

function Expenses(props) {

    const [year, setYear] = useState(2001)

    const onYearChange = (newYear) => {
        setYear(() => {return newYear})
        console.log(newYear + " in Expenses.js")
    }

    let filteredExpenses = props.expenses.filter((expense) => {
        return String(expense.date.getFullYear()) === String(year)
    })

    return (
        <div>
            <div className="expenses">
                <ExpenseFilter onYearChange={onYearChange} selectedYear={year} />
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </div>
        </div>
    )
}

export default Expenses